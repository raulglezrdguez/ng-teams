import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor() {}

  ngOnInit(): void {}

  newPerson(person: Person) {
    this.persons.push(person);
  }
}
