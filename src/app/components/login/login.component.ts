import { Component } from '@angular/core';
import { SigninService } from '../../service/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private signinService: SigninService) {}

  login(): void {
    this.signinService.signIn(this.email, this.password).subscribe(
      response => {
        if (response.success) {
          if (response.role === 'admin') {
            // Rediriger vers le tableau de bord pour l'admin
            window.location.href = '/dashboard';
          } else if (response.role === 'formateur') {
            // Rediriger vers la feuille de présence pour le formateur
            window.location.href = '/feuille';
          }
         else if (response.role === 'participant') {
          // Rediriger vers la feuille de présence pour le formateur
          window.location.href = '/home';
        }
          // Gérer d'autres rôles si nécessaire
          console.log(response.message);
        } else {
          console.error(response.message);
        }
      },
      error => {
        console.error('Une erreur s\'est produite:', error);
      }
    );
  }
}
