import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  usersService;

  constructor(usersService:UsersService, private router:Router) {
    this.usersService = usersService;
    this.users = this.usersService.getUsers();
   }

  ngOnInit(): void {
  }

  updateClick(user:User) {
    this.usersService.setUserHelper(user);
    this.router.navigate(['update-user']);
  }

  addClick(){
    this.router.navigate(['add-user']);
  }

  deleteClick(user:User){
    this.usersService.deleteUser(user);
    this.users = this.usersService.getUsers();
  }

}
