import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/service/formateur.service';

@Component({
  selector: 'app-ajout-formateur-dialog',
  templateUrl: './ajout-formateur-dialog.component.html',
  styleUrls: ['./ajout-formateur-dialog.component.css'],
  animations: []
})
export class AjoutFormateurDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private formateurService: FormateurService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
      specialite: ['', Validators.required] // Make sure this matches the key expected by the server
    });
  }

  ajouterFormateur(): void {
    if (this.form.valid) {
      const formateurData = {
        nom: this.form.value.nom,
        prenom: this.form.value.prenom,
        email: this.form.value.email,
        mot_de_passe: this.form.value.motDePasse, // Make sure this matches the key expected by the server
        specialite: this.form.value.specialite
      };
  
      this.formateurService.ajouterFormateur(formateurData).subscribe(
        (response) => {
          console.log('Formateur ajouté avec succès', response);
          // Rediriger ou effectuer d'autres actions après l'ajout réussi
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du formateur', error);
          // Gérer les erreurs d'ajout du formateur
        }
      );
    } else {
      // Mark all fields as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }
}
