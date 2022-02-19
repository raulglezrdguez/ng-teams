import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/shared/person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('workTimeInput') workTimeInputRef?: ElementRef;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  addPerson() {
    const name = this.nameInputRef?.nativeElement.value;
    const workTime = +this.workTimeInputRef?.nativeElement.value;
    this.personService.addPerson(new Person(name, workTime));
  }

  clearList() {
    this.personService.clearList();
  }
}
