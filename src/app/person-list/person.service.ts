import { Subject } from 'rxjs';
import { Person } from '../shared/person.model';

export class PersonService {
  private _persons: Person[] = [];
  personListChange = new Subject<Person[]>();
  editPerson = new Subject<string>();

  addPerson(person: Person) {
    const index = this._persons.findIndex(
      (p) => p.name.toLowerCase() === person.name.toLowerCase()
    );
    if (index !== -1) {
      this._persons[index].workTime += +person.workTime;
    } else {
      this._persons.push(new Person(person.name, person.workTime));
    }
    this.personListChange.next(this.persons);
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
    this.personListChange.next(this.persons);
  }

  get persons() {
    return this._persons.slice();
  }

  getPerson(name: string) {
    const person = this.persons.find((p) => p.name === name);
    return person;
  }

  clearList() {
    this._persons.splice(0, this._persons.length);
    this.personListChange.next(this.persons);
  }

  deletePerson(name: string) {
    this._persons = this.persons.filter((p) => p.name !== name);
    this.personListChange.next(this.persons);
  }
}
