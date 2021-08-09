import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private _registrationService: RegistrationService , private _router:Router) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this._registrationService.login(this.loginForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          if (this._registrationService.loggedIn()){
          this._router.navigate(['/dash'])
          console.log(res)
        }},
        error => console.error('Error!', error)
      );

}
}
