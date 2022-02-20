import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/shared/person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef?: ElementRef;
  // @ViewChild('workTimeInput') workTimeInputRef?: ElementRef;
  @ViewChild('form') formRef?: NgForm;

  defaultName = 'Frontend';

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  clearList() {
    this.personService.clearList();
  }

  // onSubmit(form: NgForm) {
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
}
