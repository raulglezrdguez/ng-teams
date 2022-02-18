import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Person } from 'src/app/shared/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('workTimeInput') workTimeInputRef?: ElementRef;
  @Output('newPerson') newPerson: EventEmitter<Person> =
    new EventEmitter<Person>();

  constructor() {}

  ngOnInit(): void {}

  addPerson() {
    const name = this.nameInputRef?.nativeElement.value;
    const workTime = this.workTimeInputRef?.nativeElement.value;
    this.newPerson.emit(new Person(name, workTime));
  }

  // addPerson(name: any, time: any) {
  //   console.log(name.value, time.value);
  // }
}
