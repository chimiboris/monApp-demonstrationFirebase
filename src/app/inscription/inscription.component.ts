import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService) { 

    this.inscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      const email = this.inscriptionForm.value.email;
      const password = this.inscriptionForm.value.password;
      this.authService.inscription(email, password)
        .then(response => {
          // Gérer la réussite de l'inscription
          console.log('inscription réussie')
        })
        .catch(error => {
          // Gérer l'échec de l'inscription
          console.log('échec de l\'inscription')

        });
    }
  }
}
