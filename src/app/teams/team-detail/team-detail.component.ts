import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  team: Team | undefined = undefined;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // let id = this.route.snapshot.params['id'];
    // if (id) {
    //   this.team = this.teamService.getTeamById(id);
    // }
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.team = this.teamService.getTeamById(id);
      }
    });
  }

  addToPersonList() {
    if (this.team && this.team.persons.length > 0) {
      this.teamService.addTeamPersonsToPersonList(this.team);
    }
  }

  deleteTeam() {
    if (this.team) {
      this.teamService.deleteTeam(this.team);
      this.router.navigate(['/teams']);
    }
  }
}
