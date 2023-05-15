import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  value: string = "";

  isLogin: boolean = true;
  errMessage: string = "";

  loginForm: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,  
    private router: Router,
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
 

  login(){
  

    console.log(this.loginForm.value);
    this.http.post("http://localhost:8080/api/login",this.loginForm.value).subscribe((resultData: any)=>
    {

      console.log(resultData);

      let result = resultData.email.indexOf("@");

      console.log(result )

      localStorage.setItem("username",resultData.email.substr(0, result));
      this.router.navigate(['/home']);

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
      alert(' Form Submitted succesfully');
      this.router.navigate(['/home']);
    }
  }
}
