import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() role:any;
  //role: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.role = window.sessionStorage.getItem('auth-role');
  }

  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  admin(): void {
    this.router.navigate(['/admin']);
  }

  register(): void {
    this.router.navigate(['/register']);
  }

}
