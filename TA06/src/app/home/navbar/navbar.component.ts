import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private loginService: LoginService, private userService: UserService) { }

  user: any;
  role: any;
  log: string;

  ngOnInit(): void {
    this.loginService.getUser$().subscribe(user => {
      this.user = user;
    });

    this.userService.getUser$().subscribe(data => {
      this.role = data.role;
      console.log('navbar ---->' + data.role);
      this.log = 'Logout';
    });


  }

  logout(): void {
    window.sessionStorage.clear();
    this.user.username = '';
    this.role = '';
    this.log = 'Login';
    this.router.navigate(['/login']);
  }

}
