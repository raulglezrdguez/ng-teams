import { EventEmitter, Injectable } from '@angular/core';
import { PersonService } from '../person-list/person.service';
import { Person } from '../shared/person.model';
import { Team } from './team.model';

@Injectable()
export class TeamService {
  teamSelected = new EventEmitter<Team>();

  teams: Team[] = [
    new Team(
      'Development',
      'Develop with mern stack',
      'https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092',
      [new Person('Backend', 10)]
    ),
  ];

  constructor(private personService: PersonService) {}

  addTeamPersonsToPersonList(team: Team) {
    this.personService.addPersons(team.persons);
  }
}
