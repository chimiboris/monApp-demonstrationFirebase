import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
   connexionForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService) { 

    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.connexionForm.valid) {
      const email = this.connexionForm.value.email;
      const password = this.connexionForm.value.password;
      this.authService.connexion(email, password)
        .then(response => {
          // Gérer la réussite de la connexion
          console.log('connexion réussie')

        })
        .catch(error => {
          // Gérer l'échec de la connexion
          console.log('échec de connexion')

        });
    }
  }
}
