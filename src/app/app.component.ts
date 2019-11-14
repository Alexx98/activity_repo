import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private users: User[];

  private userName:String;
  private userAge:Number;
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data)=> {
      this.users = data;
    })
  }

  addUser(){
    var user = new User();
    user.name = this.userName;
    user.age = this.userAge;

    this.userService.addUser(user).subscribe((data) =>{
      console.log(data);
      this.getUsers()
    });
  }

  updateUser(user){
    user.name = this.userName;
    user.age = this.userAge; 
    user.id = this.users[user.i];

    this.userService.updateUser(user).subscribe((data) =>{
      console.log(data);
      
    });
  }

  deleteUser(user,i){
    user.id = this.users[user.i];

    this.userService.deleteUser(user.id).subscribe((data) =>{
      console.log(data);
      this.users.splice(i,1);
    });
  }
}
