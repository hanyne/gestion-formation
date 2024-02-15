import { Component } from '@angular/core';
import { FeuillePresenceService } from '../service/feuille-presence.service';

interface LigneTableau {
  cin: string;
  direction: string;
  entreprise: string;
  emargement: string;
}

@Component({
  selector: 'app-feuille-presence',
  templateUrl: './feuille-presence.component.html',
  styleUrls: ['./feuille-presence.component.css']
})
export class FeuillePresenceComponent {
  dateApplication: string = '';
  numChecked: boolean = false;
  creditImpotChecked: boolean = false;
  droitTirageIndividuelChecked: boolean = false;
  droitTirageCollectifChecked: boolean = false;
  periodeFrom: string = '';
  periodeTo: string = '';
  horaireFrom: string = '';
  horraireTo: string = '';
  theme: string = '';
  loiFormation: string = '';
  modeFormation: string = '';
  formateur: any;
  specialite: any;
  directeur: any;
  lignesTableau: LigneTableau[] = [];

  constructor(private feuillePresenceService: FeuillePresenceService) {}

  valider() {
    const data = {
      dateApplication: this.dateApplication,
      numChecked: this.numChecked,
      creditImpotChecked: this.creditImpotChecked,
      droitTirageIndividuelChecked: this.droitTirageIndividuelChecked,
      droitTirageCollectifChecked: this.droitTirageCollectifChecked,
      periodeFrom: this.periodeFrom,
      periodeTo: this.periodeTo,
      horaireFrom: this.horaireFrom,
      horraireTo: this.horraireTo,
      theme: this.theme,
      loiFormation: this.loiFormation,
      modeFormation: this.modeFormation,
      formateur: this.formateur,
      specialite: this.specialite,
      directeur: this.directeur,
      lignesTableau: this.lignesTableau
    };

    this.feuillePresenceService.ajouterFeuillePresence(data).subscribe(
      (response: any) => {
        console.log(response); // Gérer la réponse du backend
        // Réinitialiser les champs du formulaire après l'ajout réussi
        this.reinitialiserFormulaire();
      },
      (error: any) => {
        console.error(error); // Gérer les erreurs
      }
    );
  }

  ajouterLigne() {
    const nouvelleLigne: LigneTableau = {
      cin: '',
      direction: '',
      entreprise: '',
      emargement: ''
    };

    this.lignesTableau.push(nouvelleLigne);
  }

  private reinitialiserFormulaire() {
    this.dateApplication = '';
    this.numChecked = false;
    this.creditImpotChecked = false;
    this.droitTirageIndividuelChecked = false;
    this.droitTirageCollectifChecked = false;
    this.periodeFrom = '';
    this.periodeTo = '';
    this.horaireFrom = '';
    this.horraireTo = '';
    this.theme = '';
    this.loiFormation = '';
    this.modeFormation = '';
    this.formateur = '';
    this.specialite = '';
    this.directeur = '';
    this.lignesTableau = [];
  }
}
