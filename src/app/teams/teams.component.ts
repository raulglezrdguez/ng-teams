import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  selectedTeam: Team | null = null;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teamSelected.subscribe((team) => {
      this.selectedTeam = team;
    });
  }
}
