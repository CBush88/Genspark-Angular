import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!:User;
  usersService;

  
  public setUser (user : User) {
    this.user = user;
  }
  

  constructor(usersService: UsersService, private router:Router){
    this.usersService = usersService;
  }

  onNotify(email:string){
    this.setUser(this.usersService.getUsers().filter(user => user.email === email)[0]);
    console.log(this.user);
    this.router.navigate(['update-user'])
  }
  title = 'AngularFrontEnd';
}
