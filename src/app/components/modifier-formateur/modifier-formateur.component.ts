import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-modifier-formateur',
  templateUrl: './modifier-formateur.component.html',
  styleUrls: ['./modifier-formateur.component.css']
})
export class ModifierFormateurComponent implements OnInit {
  form!: FormGroup;
  formateurId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private formateurService: FormateurService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: [''], // Champ de mot de passe facultatif
      specialite: [''], // Champ de spécialité facultatif
    });

    // Récupérer l'ID du formateur depuis les paramètres de l'URL
    this.route.params.subscribe((params) => {
      this.formateurId = params['id'];
      // Récupérer les données du formateur par ID et peupler le formulaire
      this.formateurService.getFormateurById(this.formateurId).subscribe(
        (data) => {
          // Peupler le formulaire avec les données récupérées
          this.form.patchValue(data);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données du formateur', error);
        }
      );
    });
  }

  modifierFormateur(): void {
    if (this.form.valid) {
      const formateurData = {
        id: this.formateurId,
        nom: this.form.value.nom,
        prenom: this.form.value.prenom,
        email: this.form.value.email,
        mot_de_passe: this.form.value.motDePasse,
        specialite: this.form.value.specialite
      };

      this.formateurService.modifierFormateur(formateurData).subscribe(
        (response) => {
          console.log('Formateur modifié avec succès', response);
          // Optionnellement, naviguer vers une autre route ou effectuer d'autres actions après la modification réussie
        },
        (error) => {
          console.error('Erreur lors de la modification du formateur', error);
          // Gérer les erreurs de modification de manière appropriée
        }
      );
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs de validation
      this.form.markAllAsTouched();
    }
  }  
}
