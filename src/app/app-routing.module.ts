import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeuillePresenceComponent } from './feuille-presence/feuille-presence.component';
import { GestionCyclesFormationComponent } from './gestion-cycles-formation/gestion-cycles-formation.component';
import { HomeComponent } from './home/home.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { AjoutFormateurDialogComponent } from './components/ajout-formateur-dialog/ajout-formateur-dialog.component';
import { ModifierFormateurComponent } from './components/modifier-formateur/modifier-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './components/modifier-formation/modifier-formation.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateParticipantComponent } from './components/update-participant/update-participant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';









const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'feuille', component: FeuillePresenceComponent },
  { path: 'cycle', component: GestionCyclesFormationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'formateur', component: FormateurComponent },
  { path: 'participants', component:  ParticipantsComponent },
  { path: 'add-formateur', component: AjoutFormateurDialogComponent },
  { path: 'update-formateur/:id', component: ModifierFormateurComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'listeformation', component: ListeFormationComponent },
  { path: 'update-formation/:id', component: ModifierFormationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-participant/:id', component: UpdateParticipantComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inscription/:id', component: InscriptionComponent },
  { path: 'contact', component: ContactComponent },



 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
