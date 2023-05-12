import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginV:any = FormGroup;
  private formSubmitAttempt!: boolean;

  LoginStatus$ = new BehaviorSubject<boolean>(false);

  email: string = "";
  password: string = "";

  isLogin: boolean = true;
  errMessage: string = "";

  loginForm: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,  
    private router: Router,
    private authService: CommonService,
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
    if (this.loginV.valid) {
      this.authService.login(this.loginV.value);
    }
    this.formSubmitAttempt = true;
  }
}
