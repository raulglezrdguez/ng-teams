import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Person } from 'src/app/shared/person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef?: ElementRef;
  // @ViewChild('workTimeInput') workTimeInputRef?: ElementRef;
  @ViewChild('form') formRef?: NgForm;
  editPersonSubscription: Subscription | null = null;

  defaultName = 'Frontend';

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.editPersonSubscription = this.personService.editPerson.subscribe(
      (name) => {
        const person = this.personService.getPerson(name);
        if (person) {
          this.formRef?.form.patchValue({
            name: person.name,
            workTime: person.workTime,
          });
        }
      }
    );
  }

  clearList() {
    // this.personService.clearList();
    this.formRef?.reset();
  }

  deletePerson() {
    this.personService.deletePerson(this.formRef?.value.name);
    this.clearList();
  }

  // onSubmit(form: NgForm) {
  // const name = form.value.name
  // const workTime = form.value.workTime
  // this.personService.addPerson(new Person(name, workTime));
  // }

  // onSubmit() {
  //   const name = this.nameInputRef?.nativeElement.value;
  //   const workTime = +this.workTimeInputRef?.nativeElement.value;
  //   this.personService.addPerson(new Person(name, workTime));
  // }
  onSubmit() {
    const name = this.formRef?.value.name;
    const workTime = +this.formRef?.value.workTime;
    this.personService.addPerson(new Person(name, workTime));
    console.log(this.formRef);
    // override all form values
    // this.formRef?.setValue({
    //   name: this.defaultName,
    //   workTime: 20,
    // });
    // patch some form values
    this.formRef?.form.patchValue({
      name: this.defaultName,
    });
    // reset the form values
    // this.formRef?.reset({
    //   name: this.defaultName,
    // });
  }

  ngOnDestroy(): void {
    this.editPersonSubscription?.unsubscribe();
  }
}
