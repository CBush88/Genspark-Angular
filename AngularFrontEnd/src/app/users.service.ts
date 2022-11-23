import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [{
    fullName: "test testerson",
      phone: "1234567890",
      email: "test@test.com",
      age: 20,
  }];

  user:User = {
    fullName:"",
    phone:"",
    email:"",
    age:0,
  };

  getUserHelper(){
    return this.user;
  }

  setUserHelper(user:User){
    this.user = user;
  }

  getUserByEmail(email:string){
    return this.users.filter(user => user.email === email)[0];
  }

  updateUser(email:string, user:User){
    this.users = this.users.filter(user => user.email !== email);
    this.users = [...this.users, user];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user:User){
    this.users.push(user)
  }
  
  deleteUser(userToDelete:User){
    this.users = this.users.filter(user => user !== userToDelete);
  }

  constructor() { }
}
