import { Component } from '@angular/core';
import { FormationService } from '../../service/formation.service';
import { Router } from '@angular/router'; // Importez le service Router pour la navigation
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css']
})
export class ListeFormationComponent {
  formations: any[] = [];


 
  constructor(private formationService: FormationService, private router: Router) { }
  ngOnInit(): void {
    this.loadFormations();
  }




  loadFormations(): void {
    this.formationService.getFormations().subscribe(
      (data: any[]) => {
        if (data && data.length > 0) {
          this.formations = data;
        } else {
          console.log('Aucune formation trouvée.');
        }
      },
      (error) => {
        console.error('Error loading formations:', error);
      }
    );
  }
  ajouterFormation(): void {
    this.router.navigate(['/add-formation']);
  }

  modifierFormation(formateurId: number): void {
   this.router.navigate(['/update-formation', formateurId]);

  }

  supprimerFormation(formateurId: number): void {
    this.formationService.supprimerFormation(formateurId).subscribe(
      () => {

        // Reload the list after successful deletion
        this.loadFormations();
      },
      (error) => {
        console.error('Error deleting formateur:', error);
      }
    );
  }
   
}
