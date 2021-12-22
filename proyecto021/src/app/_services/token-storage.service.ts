import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const token_now = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MzE4MDY0NzAsImlzcyI6Ikpvc2UgTWFyw61uIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MzI2NzA0NzB9.i3UYTmUeQb09BCr0xnlOEJZyBR9OEEDlwcdsjOXZ6GdAYb-s8Jv1aZ5en7u3GhVLYOn5Rox0DtNgnT3akhvPpw';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token_now);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
