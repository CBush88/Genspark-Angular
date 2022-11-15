import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularSPA';
  people:
  {
    firstName:string;
    lastName:string;
    age:number;
  }[] = [{
    firstName: "Example",
    lastName: "Person",
    age: 22,
  }];

  person!:{
    firstName: string;
    lastName: string;
    age: number;
  };

  onNotify(person:
    {
    firstName: string;
    lastName: string;
    age: number;
  }
  ) {
    this.people.push(person);
  }

}
