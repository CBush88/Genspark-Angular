import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UsersService } from '../users.service';
import { User } from '../user';
import { UserDetails } from '../user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user!:User;
  userEmailId:string;
  
  ngOnInit(): void {
    this.userForm.controls['fullName'].setValue(this.user.fullName);
    this.userForm.controls['email'].setValue(this.user.email);
    this.userForm.controls['phone'].setValue(this.user.phone);
    this.userForm.controls['age'].setValue(this.user.age);
  }
  
  constructor(private usersService:UsersService, private router:Router) {
    this.user = usersService.getUserHelper();
    this.userEmailId = this.user.email;
   }

  userForm = new FormGroup <UserDetails> ({
    fullName: new FormControl("", {nonNullable:true, validators:[Validators.required,Validators.pattern('^[a-zA-Z]+[ ][a-zA-Z]+$')]}),
    email: new FormControl("", {nonNullable:true, validators:[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]}),
    phone: new FormControl("", {nonNullable:true, validators:[Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')]}),
    age: new FormControl(this.user?.age, {nonNullable:true, validators:[Validators.required, Validators.min(13)]}),
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
    console.log(this.user);
    this.usersService.updateUser(this.userEmailId, this.userForm.value as User);
    this.router.navigate([''])
  }

}
