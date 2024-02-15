import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionService } from 'src/app/service/inscription.service';
import { FormationService } from '../../service/formation.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  idUtilisateur!: number;
  idFormation!: number;
  dateInscription!: string;
  nomFormation: string = '';

  constructor(private route: ActivatedRoute, private inscriptionService: InscriptionService, private formationService: FormationService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idFormation = params['idFormation'];
      if (idFormation) {
        this.idFormation = idFormation;
        console.log('ID de la formation:', this.idFormation); // Vérification de l'ID de la formation
        this.loadFormationDetails(idFormation);
      }
    });
  }

  loadFormationDetails(id: number): void {
    this.formationService.getFormationById(id).subscribe(
      (formation: any) => {
        this.nomFormation = formation.nom_formation;
        console.log('Nom de la formation:', this.nomFormation); // Vérification du nom de la formation
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de la formation :', error);
      }
    );
  }
  inscrire(): void {
    // Appeler le service d'inscription avec l'ID de l'utilisateur, l'ID de la formation, et la date d'inscription
    this.inscriptionService.inscrireUtilisateur(this.idUtilisateur, this.idFormation, this.dateInscription).subscribe(
      response => {
        console.log('Inscription réussie !');
        // Gérer la réussite de l'inscription ici
      },
      error => {
        console.error('Erreur lors de l\'inscription :', error);
        // Gérer les erreurs d'inscription ici
      }
    );
  }
}
