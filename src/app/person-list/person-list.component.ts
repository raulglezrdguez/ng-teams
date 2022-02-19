import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.persons;
    this.personService.personListChange.subscribe((personList) => {
      this.persons = personList;
    });
  }

  newPerson(person: Person) {
    this.personService.addPerson(person);
  }
}
