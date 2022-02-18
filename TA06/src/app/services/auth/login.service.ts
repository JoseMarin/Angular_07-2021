import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const baseUrl = 'https://jmm-spring-api-h2-angular.herokuapp.com';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: any;
  private user$: Subject<any>; // Subject que emite información a componentes

  constructor(private http: HttpClient) {
    this.user$ = new Subject();
  }

  signup(data: any) {
    console.log(data);
    this.user = data;
    this.user$.next(this.user);
    return this.http.post(`${baseUrl}/login`, data);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/users/${name}`);
  }

  add(data: any) {
    return this.http.post(`${baseUrl}/users/`, data);
  }

  // updateUser(user: any){
  //   this.user = user;
  //   this.user$.next(this.user);
  // }

  getUser$(): Observable<any>{
    return this.user$.asObservable();
  }

}
