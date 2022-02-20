import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from '../shared/person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit, OnDestroy {
  persons: Person[] = [];
  private personListChangeSubscription: Subscription | null = null;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.persons = this.personService.persons;
    this.personListChangeSubscription =
      this.personService.personListChange.subscribe((personList) => {
        this.persons = personList;
      });
  }

  ngOnDestroy(): void {
    this.personListChangeSubscription?.unsubscribe();
  }
}
