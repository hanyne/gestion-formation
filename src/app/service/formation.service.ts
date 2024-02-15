import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private baseUrl = 'http://localhost/gestion-formation';

  constructor(private http: HttpClient) { }

  getFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/formation.php`);
  }
  getFormationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formation.php?id=${id}`);
  }
  
    
  ajouterFormation(formation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/formation.php`, formation);
  }

  supprimerFormation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/formation.php?id=${id}`);
  }

  modifierFormation(id: number, formation: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/formation.php`, formation);
  }
}
