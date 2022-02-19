import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';
import { TeamsStartComponent } from './teams/teams-start/teams-start.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      { path: '', component: TeamsStartComponent },
      { path: 'new', component: TeamEditComponent },
      { path: ':id', component: TeamDetailComponent },
      { path: ':id/edit', component: TeamEditComponent },
    ],
  },
  { path: 'persons', component: PersonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
