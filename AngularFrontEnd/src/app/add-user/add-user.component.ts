import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsersService } from '../users.service';
import { User } from '../user';
import { UserDetails } from '../user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  ngOnInit(): void {
  }

  usersService;

  constructor(usersService:UsersService, private router:Router) {
    this.usersService = usersService;
   }

  userForm = new FormGroup <UserDetails> ({
    fullName: new FormControl('', {nonNullable:true, validators:[Validators.required,Validators.pattern('^[a-zA-Z]+[ ][a-zA-Z]+$')]}),
    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]}),
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

  onSubmit() {
    this.usersService.addUser(this.userForm.value as User);
    this.userForm.reset();
    this.router.navigate(['']);
  }

}