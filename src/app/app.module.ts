import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamItemComponent } from './teams/team-list/team-item/team-item.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/person-edit/person-edit.component';
import { MaterialModule } from './material/material.module';
import { TeamService } from './teams/team.service';
import { PersonService } from './person-list/person.service';
import { AppRoutingModule } from './app-routing.module';
import { TeamsStartComponent } from './teams/teams-start/teams-start.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamListComponent,
    TeamItemComponent,
    PersonListComponent,
    PersonEditComponent,
    TeamsStartComponent,
    TeamEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [TeamService, PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
