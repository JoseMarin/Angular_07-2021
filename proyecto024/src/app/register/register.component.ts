import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    id: 0,
    username: '',
    password: '',
    role: 'user',
  };

  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  newUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      role: this.user.role
    };

    this.userService.add(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
