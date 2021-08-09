import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  forgotForm = new FormGroup({
    email: new FormControl('')
  });
  constructor(private _registrationService: RegistrationService , private _router:Router) { }

  

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.forgotForm.value);
    this._registrationService.forgot(this.forgotForm.value)
      .subscribe(
        res =>  {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          console.log('success')
         
        },
        err =>{ 
          if(err.status === 422)
          {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
      );

}
}

