import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
 
  private baseUrl = 'http://localhost/gestion-formation/signin.php';

  constructor(private http: HttpClient, private authService: AuthService) { }

  signIn(email: string, motDePasse: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('mot_de_passe', motDePasse);
    
    return new Observable(observer => {
      this.http.post<any>(this.baseUrl, formData).subscribe(response => {
        if (response.success) {
          // Utilisez le nom d'utilisateur retourné par le backend pour mettre à jour l'état de connexion
          this.authService.setLoggedIn(response.username); // Supposons que le nom d'utilisateur soit retourné dans response.username
        }
        observer.next(response);
        observer.complete();
      });
    });
  }
 
}
