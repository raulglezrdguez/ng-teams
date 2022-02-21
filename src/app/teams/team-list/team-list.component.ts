import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit, OnDestroy {
  teams: Team[] = [];
  teamListChangeSubscription: Subscription | null = null;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teams = this.teamService.teams;

    this.teamListChangeSubscription = this.teamService.teamListChange.subscribe(
      (teams) => {
        console.log(teams);
        this.teams = teams;
      }
    );
  }

  ngOnDestroy(): void {
    this.teamListChangeSubscription?.unsubscribe();
  }
}
