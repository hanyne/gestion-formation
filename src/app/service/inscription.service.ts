import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrl = 'http://localhost/gestion-formation';

  constructor(private http: HttpClient) { }

  inscrireUtilisateur(idUtilisateur: number, idFormation: number, dateInscription: string): Observable<any> {
    const data = { id_utilisateur: idUtilisateur, id_formation: idFormation, date_inscription: dateInscription };
    return this.http.post(`${this.baseUrl}/inscription.php`, data);
  }
}
