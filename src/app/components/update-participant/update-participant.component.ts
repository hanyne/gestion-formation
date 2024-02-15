import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantsService } from '../../service/participants.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {
  form!: FormGroup;
  participantId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private participantService: ParticipantsService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    // Récupérer l'ID du participant depuis les paramètres de l'URL
    this.route.params.subscribe((params) => {
      this.participantId = params['id'];
      // Récupérer les données du participant par ID et peupler le formulaire
      this.participantService.getParticipantById(this.participantId).subscribe(
        (data) => {
          // Peupler le formulaire avec les données récupérées pour nom, prenom et email uniquement
          this.form.patchValue({
            nom: data.nom,
            prenom: data.prenom,
            email: data.email
          });
        },
        (error) => {
          console.error('Erreur lors de la récupération des données du participant', error);
        }
      );
    });
  }

  modifierParticipant(): void {
    if (this.form.valid) {
      const participantData = {
        id: this.participantId,
        nom: this.form.value.nom,
        prenom: this.form.value.prenom,
        email: this.form.value.email
      };

      this.participantService.updateParticipant(participantData).subscribe(
        (response) => {
          console.log('Participant modifié avec succès', response);
          // Optionnellement, naviguer vers une autre route ou effectuer d'autres actions après la modification réussie
        },
        (error) => {
          console.error('Erreur lors de la modification du participant', error);
          // Gérer les erreurs de modification de manière appropriée
        }
      );
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs de validation
      this.form.markAllAsTouched();
    }
  }  
}
