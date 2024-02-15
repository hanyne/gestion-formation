import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private baseUrl = 'http://localhost/gestion-formation';

  constructor(private http: HttpClient) { }

  // Récupérer tous les participants
  getParticipants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/participant.php`);
  }

  // Récupérer un participant par son ID
  getParticipantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/participant.php?id=${id}`);
  }

  // Mettre à jour un participant
  updateParticipant(participant: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/participant.php`, participant);
  }

  // Supprimer un participant
  deleteParticipant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/participant.php?id=${id}`);
  }
}
