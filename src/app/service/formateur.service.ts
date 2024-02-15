import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private baseUrl = 'http://localhost/gestion-formation';

  constructor(private http: HttpClient) { }

  getFormateurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/formateur.php`);
  }

  // Method to fetch a specific formateur by ID
  getFormateurById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formateur.php?id=${id}`);
  }
  

  ajouterFormateur(formateur: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/formateur.php`, formateur);
  }

  supprimerFormateur(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/formateur.php?id=${id}`);
  }

  modifierFormateur(formateur: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/formateur.php`, formateur);
  }
}
