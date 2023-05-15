import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  submitted = false;
  
  
  constructor(
    private fb: FormBuilder,  
    private router: Router
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({   
      email: ['', [Validators.required, Validators.email]], 
    });
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {

      //Business logic for Forget Password 
      //Get the value of an email >> check it aganst you mongoDB user table to see if it exist
      //If exist then get the password and send an email >> Do Successful alert
      //else if not exist then "Please contact system admin" alert
      alert(' Form Submitted succesfully');
    
    }
  }
}
