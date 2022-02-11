import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = null;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    const username = window.sessionStorage.getItem("auth-username");
    console.log(username);

    if(username==null){
      console.log('usuario logged out');
      this.router.navigate(['/login']);
    }

    this.userService.getByName(username)
      .subscribe(
        result => {
          this.user = result;
          window.sessionStorage.setItem("auth-id",result.id);
          window.sessionStorage.setItem("auth-role",result.role);
        });

  }


}
