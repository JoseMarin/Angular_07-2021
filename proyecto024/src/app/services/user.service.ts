import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8181/users';
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getByName(name: string) {
  //   console.log(name);
  //   return this.http.get(`${baseUrl}/${name}`);
  // }

  getByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}/${name}`);
  }

  add(data: any) {
    return this.http.post(`${baseUrl}/`, data);
  }

}

