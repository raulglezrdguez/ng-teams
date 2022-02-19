import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  @Input('team') team: Team | null = null;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {}

  addToPersonList() {
    if (this.team && this.team.persons.length > 0) {
      this.teamService.addTeamPersonsToPersonList(this.team);
    }
  }
}
