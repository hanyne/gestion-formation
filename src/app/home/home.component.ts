import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formations: any[] = [];
  loggedInUser: string | null = null; // Variable pour stocker le nom d'utilisateur connecté
  isLoggedIn: boolean = false; // Variable pour stocker l'état de connexion de l'utilisateur

  constructor(private formationService: FormationService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadFormations();
    this.updateLoggedInStatus();
  }
  
  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data: any[]) => {
        if (data && data.length > 0) {
          this.formations = data;
        } else {
          console.log('Aucune formation trouvée.');
        }
      },
      (error) => {
        console.error('Error loading formations:', error);
      }
    );
  }

  updateLoggedInStatus(): void {
    this.loggedInUser = this.authService.isLoggedInUser();
    this.isLoggedIn = !!this.loggedInUser; // Convertit loggedInUser en un boolean
  }

  logout(): void {
    this.authService.setLoggedIn(null); // Déconnexion : Supprimer les informations de l'utilisateur du stockage local
    this.updateLoggedInStatus(); // Met à jour l'état de connexion après la déconnexion
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }
}
