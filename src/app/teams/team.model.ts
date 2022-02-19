import { Person } from '../shared/person.model';
import { v4 as uuid } from 'uuid';

export class Team {
  id: string;
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
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.persons = persons;
  }
}
