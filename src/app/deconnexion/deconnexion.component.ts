import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
  }

  deconnexion() {
    this.authService.deconnexion()
      .then(response => {
        // Gérer la réussite de la déconnexion
        console.log("Utilisateur déconnecté avec succès !");
      })
      .catch(error => {
        // Gérer l'échec de la déconnexion
        console.error("Erreur lors de la déconnexion :", error);
      });
  }

}
