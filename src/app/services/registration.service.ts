import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  _url = 'http://localhost:3000/users/register';
  _url2 = 'http://localhost:3000/users/login';
  _url3 = 'http://localhost:3000/users/forgot';
  constructor(private _http: HttpClient, private _router: Router) {}

  register(user) {
    return this._http.post<any>(this._url, user);
  }

  login(user) {
    return this._http.post<any>(this._url2, user);
  }

  forgot(user) {
    return this._http.post<any>(this._url3, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/register']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  userlog() {
    return localStorage.getItem('token') !== 'undefined';
  }
}
