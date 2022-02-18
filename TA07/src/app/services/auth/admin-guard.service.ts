import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
    const role = window.sessionStorage.getItem("auth-role");
    console.log(role);

    if (role!='admin'){
      console.log('No tienes privilegios de admin.'); //This will be executed
      this.router.navigate(['/home']);
      return false;
    }

    return true;
}
}
