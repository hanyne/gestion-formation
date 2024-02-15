import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/service/participants.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  participants: any[] = [];

  constructor(private participantService: ParticipantsService, private router: Router) { }

  ngOnInit(): void {
    this.getParticipants();
  }

  getParticipants(): void {
    this.participantService.getParticipants().subscribe(
      (data) => {
        this.participants = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des participants', error);
      }
    );
  }

  modifierParticipant(id: number): void {
    // Naviguer vers la page de modification du participant avec l'ID spécifié
    this.router.navigate(['/update-participant', id]);
  }

 
}
