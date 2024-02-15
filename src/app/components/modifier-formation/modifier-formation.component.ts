import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {
  form!: FormGroup;
  formationId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom_formation: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.route.params.subscribe((params) => {
      this.formationId = params['id'];
      this.formationService.getFormationById(this.formationId).subscribe(
        (data) => {
          this.form.patchValue(data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données de la formation', error);
        }
      );
    });
  }

  modifierFormation(): void {
    if (this.form.valid) {
      const formationData = {
        id: this.formationId,
        nom_formation: this.form.value.nom_formation,
        description: this.form.value.description,
        date_debut: this.form.value.date_debut,
        date_fin: this.form.value.date_fin,
        status: this.form.value.status
      };

      this.formationService.modifierFormation(this.formationId, formationData).subscribe(
        (response) => {
          console.log('Formation modifiée avec succès', response);
          this.router.navigate(['/liste-formations']);
        },
        (error) => {
          console.error('Erreur lors de la modification de la formation', error);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
