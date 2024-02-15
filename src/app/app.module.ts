import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeuillePresenceComponent } from './feuille-presence/feuille-presence.component';
import { GestionCyclesFormationComponent } from './gestion-cycles-formation/gestion-cycles-formation.component';
import { FormateurComponent } from './formateur/formateur.component';
import { HomeComponent } from './home/home.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { AjoutFormateurDialogComponent } from './components/ajout-formateur-dialog/ajout-formateur-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifierFormateurComponent } from './components/modifier-formateur/modifier-formateur.component';
import { FormationComponent } from './components/formation/formation.component';
import { ListeFormationComponent } from './components/liste-formation/liste-formation.component';
import { ModifierFormationComponent } from './components/modifier-formation/modifier-formation.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateParticipantComponent } from './components/update-participant/update-participant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FeuillePresenceComponent,
    GestionCyclesFormationComponent,
    FormateurComponent,
    HomeComponent,
    ParticipantsComponent,
    AjoutFormateurDialogComponent,
    ModifierFormateurComponent,
    FormationComponent,
    ListeFormationComponent,
    ModifierFormationComponent,
    LoginComponent,
    UpdateParticipantComponent,
    DashboardComponent,
    InscriptionComponent,
    ContactComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    RouterModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
