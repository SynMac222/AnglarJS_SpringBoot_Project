import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/users/';
const BASE_URL = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','responseType': 'text'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    const result= this.http.post(AUTH_API + 'authenticate', {
      username: credentials.username,
      user_password: credentials.password,
      usertype:"USER"
    }, {responseType: 'text'});

    console.log(result);
    return result;


  }

  register(user): Observable<any> {
    console.log(user);
    return this.http.post(BASE_URL + '/users/createUser', {
      username: user.username,
      user_password: user.password,
      usertype: user.user_type
    }, {responseType: 'text'});
  }
}