import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private formationService: FormationService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom_formation: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      status: [''] // Déclarer le champ 'status' dans le formulaire
    });
  }

  ajouterFormation(): void {
    if (this.form.valid) {
      this.formationService.ajouterFormation(this.form.value).subscribe(
        (response) => {
          console.log('Formation ajoutée avec succès', response);
          this.form.reset(); // Réinitialiser le formulaire après l'ajout réussi
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la formation', error);
        }
      );
    } else {
      this.form.markAllAsTouched(); // Marquer tous les champs comme touchés pour afficher les erreurs de validation
    }
  }
}
