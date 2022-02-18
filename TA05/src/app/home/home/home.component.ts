import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor(private router:Router, private loginServide: LoginService, private userService: UserService) { }

  ngOnInit(): void {
    const username = window.sessionStorage.getItem("auth-username");
    console.log(username);

    this.loginServide.getByName(username)
      .subscribe(
        result => {
          this.user = result;
          window.sessionStorage.setItem("auth-id",result.id);
          window.sessionStorage.setItem("auth-role",result.role);
          this.userService.addUser(result);
        });


  }

}
