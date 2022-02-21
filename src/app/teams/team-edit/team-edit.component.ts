import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/shared/person.model';
import { Team } from '../team.model';
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
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.editMode = params['id'] !== undefined;
      this.initForm();
    });
  }

  private initForm() {
    let teamName = '';
    let teamImage = '';
    let teamDescription = '';
    let teamPersons = new FormArray([]);

    if (this.editMode) {
      const team = this.teamService.getTeamById(this.id);
      if (team) {
        teamName = team.name;
        teamImage = team.imagePath;
        teamDescription = team.description;
        if (team.persons) {
          for (let person of team.persons) {
            teamPersons.push(
              new FormGroup({
                name: new FormControl(person.name, this.noEmpty),
                workTime: new FormControl(person.workTime, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/),
                ]),
              })
            );
          }
        }
      }
    }

    this.teamForm = new FormGroup({
      name: new FormControl(teamName, this.noEmpty),
      imagePath: new FormControl(teamImage, this.noEmpty),
      description: new FormControl(teamDescription, this.noEmpty),
      persons: teamPersons,
    });
  }

  get controls() {
    return (<FormArray>this.teamForm.get('persons')).controls;
  }

  onSubmit() {
    const values = this.teamForm.value;
    const persons = values.persons.map(
      (p: { name: string; workTime: number }) => new Person(p.name, p.workTime)
    );
    const team = new Team(
      values.name,
      values.description,
      values.imagePath,
      persons
    );
    console.log(this.editMode);
    if (this.editMode) {
      this.teamService.updateTeam(this.id, team);
    } else {
      this.teamService.addTeam(team);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addPerson() {
    const teamPersons = <FormArray>this.teamForm.get('persons');
    console.log(teamPersons.value);
    if (
      teamPersons.value.length === 0 ||
      teamPersons.value[teamPersons.value.length - 1]['name'] !== ''
    ) {
      teamPersons.push(
        new FormGroup({
          name: new FormControl('', this.noEmpty),
          workTime: new FormControl(10, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/),
          ]),
        })
      );
    }
  }

  noEmpty(control: AbstractControl): ValidationErrors | null {
    const isEmpty = (control.value || '').trim().length === 0;
    const isValid = !isEmpty;
    return isValid ? null : { Empty: true };
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeletePerson(index: number) {
    (<FormArray>this.teamForm.get('persons')).removeAt(index);
  }
}
