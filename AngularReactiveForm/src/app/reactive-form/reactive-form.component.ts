import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor() { }

  userForm = new FormGroup <userDetails> ({
    fullName: new FormControl('', {nonNullable:true, validators:[Validators.required,Validators.pattern('^[a-zA-Z]+[ ][a-zA-Z]+$')]}),
    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]}),
    phone: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')]}),
    age: new FormControl(0, {nonNullable:true, validators:[Validators.required, Validators.min(13)]}),
  })

  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get age() {
    return this.userForm.get('age');
  }

  onSubmit = () => {
    console.log(this.userForm.value)
  }

}

interface userDetails {
  fullName: FormControl <string>,
  email: FormControl <string>,
  phone: FormControl <string>,
  age: FormControl <number>,
}
