import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeuillePresenceService {
  private baseUrl = 'http://localhost/gestion-formation';

  constructor(private http: HttpClient) { }

  getFeuillesPresence(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/feuille.php`);
  }

  // Ajouter le catchError pour intercepter les erreurs HTTP
  ajouterFeuillePresence(feuille: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/feuille.php`, feuille)
      .pipe(
        catchError(this.handleError) // Intercepter les erreurs HTTP
      );
  }

  // Fonction pour gérer les erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite :', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Code d'erreur : ${error.status}, ` +
        `Détails : ${error.error}`);
    }
    // Renvoyer une observable avec un message d'erreur convivial
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }

  mettreAJourFeuillePresence(feuille: any): Observable<any> {
    // Vous devez inclure l'ID de la feuille de présence dans la requête PUT
    const id = feuille.id;
    return this.http.put<any>(`${this.baseUrl}/feuille.php?id=${id}`, feuille);
  }

  supprimerFeuillePresence(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/feuille.php?id=${id}`);
  }
}
