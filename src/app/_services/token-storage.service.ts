import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {

    // localStorage.removeItem
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string| null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // public saveUser(user) {
  //   window.localStorage.removeItem(USER_KEY);
  //   window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  // public getUser() {
  //   return JSON.parse(localStorage.getItem(USER_KEY)||'{}');
  // }
}