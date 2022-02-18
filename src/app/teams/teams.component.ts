import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  selectedTeam: Team | null = null;

  constructor() {}

  ngOnInit(): void {}
}
