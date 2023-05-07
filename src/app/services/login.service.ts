import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  doLogin() {
    localStorage.setItem('token', '123');
    this.router.navigate(['todolist']);
  }
  doLogout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
