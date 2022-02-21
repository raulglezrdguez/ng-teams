import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PersonService } from '../person-list/person.service';
import { Person } from '../shared/person.model';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  _teams: Team[] = [
    new Team(
      'Development',
      'Develop with mern stack',
      'https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092',
      [new Person('Frontend', 10)]
    ),
    new Team(
      'Backend',
      'Develop with nestjs',
      'https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092',
      [new Person('Backend', 10)]
    ),
  ];

  teamListChange = new Subject<Team[]>();

  constructor(private personService: PersonService) {}

  get teams() {
    return this._teams.slice();
  }

  addTeamPersonsToPersonList(team: Team) {
    this.personService.addPersons(team.persons);
  }

  getTeamById(id: string) {
    const team = this.teams.find((t) => t.id === id);
    return team;
  }

  addTeam(team: Team) {
    this._teams.push(team);
    this.teamListChange.next(this.teams);
  }

  deleteTeam(team: Team) {
    this._teams = this.teams.filter((t) => t.id !== team.id);
    this.teamListChange.next(this.teams);
  }

  updateTeam(id: string, team: Team) {
    const index = this._teams.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._teams[index].name = team.name;
      this._teams[index].description = team.description;
      this._teams[index].imagePath = team.imagePath;
      this._teams[index].persons = team.persons;

      this.teamListChange.next(this.teams);
    }
  }
}
