import { EventEmitter, Injectable } from '@angular/core';
import { PersonService } from '../person-list/person.service';
import { Person } from '../shared/person.model';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  teamSelected = new EventEmitter<Team>();

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
}
