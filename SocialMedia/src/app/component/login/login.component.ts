import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,  
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({   
      email: ['', [Validators.required, Validators.email]], 
    });
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      //Business logic to Authorize user to the system
      //Get the email and password values from the frontend
      //Check if password and email exist 
      //If Exist then route to Home Page
      //else if not the Incorrect credentials dont route to any page
      this.router.navigate(['/home']);
    }
  }
}
