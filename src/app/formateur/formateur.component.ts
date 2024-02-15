import { Component } from '@angular/core';
import { FormateurService } from '../service/formateur.service';
import { Router } from '@angular/router'; // Importez le service Router pour la navigation
import { MatDialog } from '@angular/material/dialog';
import { AjoutFormateurDialogComponent } from '../components/ajout-formateur-dialog/ajout-formateur-dialog.component'; 


@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent {
  formateurs: any[] = [];


 
  constructor(private dialog: MatDialog, private formateurService: FormateurService, private router: Router) { }
  ngOnInit(): void {
    this.loadFormateurs();
  }

  loadFormateurs(): void {
    this.formateurService.getFormateurs().subscribe(
      (data: any[]) => {
        this.formateurs = data;
      },
      (error) => {
        console.error('Error loading formateurs:', error);
      }
    );
  }

  ajouterFormateur(): void {
    this.router.navigate(['/add-formateur']);
  }

  modifierFormateur(formateurId: number): void {
   this.router.navigate(['/update-formateur', formateurId]);

  }

  supprimerFormateur(formateurId: number): void {
    this.formateurService.supprimerFormateur(formateurId).subscribe(
      () => {
        // Reload the list after successful deletion
        this.loadFormateurs();
      },
      (error) => {
        console.error('Error deleting formateur:', error);
      }
    );
  }
   
  
}
