import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
  }

  onSubmit(firstName:NgModel, lastName:NgModel, age:NgModel){
    let person:{firstName: string, lastName: string, age:number};
    person = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    }
    firstName.reset();
    lastName.reset();
    age.reset();
    this.addPerson.emit(person);
  }

  @Output() addPerson = new EventEmitter<{
    firstName: string;
    lastName: string;
    age: number;
  }>();

}
