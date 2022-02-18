import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [new Person('Joan', 10), new Person('Susan', 20)];

  constructor() {}

  ngOnInit(): void {}
}
