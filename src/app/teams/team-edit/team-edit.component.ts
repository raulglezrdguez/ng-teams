import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css'],
})
export class TeamEditComponent implements OnInit {
  id = '';
  editMode = false;
  teamForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.editMode = params['id'] !== null;
      this.initForm();
    });
  }

  private initForm() {
    let teamName = '';
    let teamImage = '';
    let teamDescription = '';

    if (this.editMode) {
      const team = this.teamService.getTeamById(this.id);
      if (team) {
        teamName = team.name;
        teamImage = team.imagePath;
        teamDescription = team.description;
      }
    }

    this.teamForm = new FormGroup({
      name: new FormControl(teamName),
      imagePath: new FormControl(teamImage),
      description: new FormControl(teamDescription),
    });
  }

  onSubmit() {
    console.log(this.teamForm.value);
  }
}
