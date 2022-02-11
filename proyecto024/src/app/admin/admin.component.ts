import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const role = window.sessionStorage.getItem("auth-role");
    console.log(role);

    if(role!='admin'){
      console.log('Usuario no autorizado');
      this.router.navigate(['home']);
    }

  }

}
