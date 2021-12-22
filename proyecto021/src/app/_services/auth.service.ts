import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8181/';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  datos: any = null;
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // let headers = new Headers();
    // headers.append('Access-Control-Expose-Headers', 'etag');
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })

    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, {observe: 'response'}).pipe(
          map(data => {
            data.headers.append('Authorization','authkey');
              sessionStorage.setItem('usuario',username);
              sessionStorage.setItem('password',password);
              sessionStorage.setItem('auth-token','eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MzE4MDY0NzAsImlzcyI6Ikpvc2UgTWFyw61uIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MzI2NzA0NzB9.i3UYTmUeQb09BCr0xnlOEJZyBR9OEEDlwcdsjOXZ6GdAYb-s8Jv1aZ5en7u3GhVLYOn5Rox0DtNgnT3akhvPpw');
              return data;
          })

  );
      }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, {observe: 'response'}).pipe(
      data => {
          sessionStorage.setItem('usuario',username);
          sessionStorage.setItem('password',password);
          sessionStorage.setItem('data',JSON.stringify(data));
          return data;
      }

);
  }
}
