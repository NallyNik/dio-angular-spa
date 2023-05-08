import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private service: LoginService) {}

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;

  //email validation
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //button
  login(): void {
    this.service.doLogin();
  }
}
