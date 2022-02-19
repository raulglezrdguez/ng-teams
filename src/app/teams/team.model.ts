import { Person } from '../shared/person.model';

export class Team {
  name: string;
  description: string;
  imagePath: string;
  persons: Person[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    persons: Person[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.persons = persons;
  }
}
