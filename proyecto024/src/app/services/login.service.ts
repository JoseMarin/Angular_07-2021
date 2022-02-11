import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8181/login';
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signup(data: any) {
    console.log(data);
    return this.http.post(`http://localhost:8181/login`, data);
  }

  // signup(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
}
