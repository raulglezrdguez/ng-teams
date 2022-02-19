import { EventEmitter } from '@angular/core';
import { Person } from '../shared/person.model';

export class PersonService {
  personListChange = new EventEmitter<Person[]>();
  private _persons: Person[] = [];

  addPerson(person: Person) {
    const index = this._persons.findIndex(
      (p) => p.name.toLowerCase() === person.name.toLowerCase()
    );
    if (index !== -1) {
      this._persons[index].workTime += +person.workTime;
    } else {
      this._persons.push(new Person(person.name, person.workTime));
    }
    this.personListChange.emit(this.persons);
  }

  addPersons(persons: Person[]) {
    for (let person of persons) {
      const index = this._persons.findIndex(
        (p) => p.name.toLowerCase() === person.name.toLowerCase()
      );
      if (index !== -1) {
        this._persons[index].workTime += +person.workTime;
      } else {
        this._persons.push(new Person(person.name, person.workTime));
      }
    }
    this.personListChange.emit(this.persons);
  }

  get persons() {
    return this._persons.slice();
  }

  clearList() {
    this._persons.splice(0, this._persons.length);
    this.personListChange.emit(this.persons);
  }
}
