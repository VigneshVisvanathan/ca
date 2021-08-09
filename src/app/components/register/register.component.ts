import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;
  emailValid;
  emailMessage;
  usernameValid;
  usernameMessage;
  firstnValid;
  firstnMessage;
  firstnameValid;
  firstnameMessage;
  lastnValid;
  lastnMessage;
  lastnameValid;
  lastnameMessage;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  registerUserData = {}
  
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService,private _router:Router) { }
  // disableForm() {
  //   this.form.controls['email'].disable();
  //   this.form.controls['username'].disable();
  //   this.form.controls['password'].disable();
  //   this.form.controls['confirm'].disable();
  // }

  // // Function to enable the registration form
  // enableForm() {
  //   this.form.controls['email'].enable();
  //   this.form.controls['username'].enable();
  //   this.form.controls['password'].enable();
  //   this.form.controls['confirm'].enable();
  // }

  // Function to validate e-mail is proper format
  validateEmail(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    // Test email against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid email
    } else {
      return { 'validateEmail': true } // Return as invalid email
    }
  }

  // // Function to validate username is proper format
  // validateUsername(controls) {
  //   // Create a regular expression
  //   const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
  //   // Test username against regular expression
  //   if (regExp.test(controls.value)) {
  //     return null; // Return as valid username
  //   } else {
  //     return { 'validateUsername': true } // Return as invalid username
  //   }
  // }

  // // Function to validate password
  // validatePassword(controls) {
  //   // Create a regular expression
  //   const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
  //   // Test password against regular expression
  //   if (regExp.test(controls.value)) {
  //     return null; // Return as valid password
  //   } else {
  //     return { 'validatePassword': true } // Return as invalid password
  //   }
  // }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }
  // onRegisterSubmit() {
  //   this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
  //   this.disableForm(); // Disable the form
  //   // Create user object form user's inputs
  //   const user = {
  //     email: this.form.get('email').value, // E-mail input field
  //     username: this.form.get('username').value, // Username input field
  //     password: this.form.get('password').value // Password input field
  //   }

   

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validateEmail // Custom validation
      ])],
      // Username Input
      // username: ['', Validators.compose([
      //   Validators.required, // Field is required
      //   Validators.minLength(3), // Minimum length is 3 characters
      //   Validators.maxLength(15), // Maximum length is 15 characters
      //   // this.validateUsername // Custom validation
      // ])],
      firstn: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        // this.validateUsername // Custom validation
      ])],
      lastn: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(15), // Maximum length is 15 characters
        // this.validateUsername // Custom validation
      ])],
      // lastname: ['', Validators.compose([
      //   Validators.required, // Field is required
      //   Validators.minLength(3), // Minimum length is 3 characters
      //   Validators.maxLength(15), // Maximum length is 15 characters
      //   // this.validateUsername // Custom validation
      // ])],
      // Password Input
      password: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(3), // Minimum length is 3 characters
        Validators.maxLength(20), // Maximum length is 25 characters
        // this.validatePassword // Custom validation
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] // Field is required
    }, { validator: this.matchingPasswords('password', 'confirm') } 
    );

    // this.form.get('subscribe').valueChanges
    //   .subscribe(checkedValue => {
    //     const email = this.form.get('email');
    //     if (checkedValue) {
    //       email.setValidators(Validators.required);
    //     } else {
    //       email.clearValidators();
    //     }
    //     email.updateValueAndValidity();
    //   });
      
  }

  get userName() {
    return this.form.get('userName');
  }

  get email() {
    return this.form.get('email');
  }

 

  

  

  onSubmit() {
    console.log(this.form.value);
    this._registrationService.register(this.form.value)
      .subscribe(
        res =>  {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          console.log('success')
          this._router.navigate(['/login'])
        },
        err =>{ 
          if(err.status === 422)
          {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      
  });
}

  

}

