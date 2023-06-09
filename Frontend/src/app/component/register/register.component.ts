import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private router : Router) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Password', form.value.password);
    console.log('Confirm Password', form.value.password2);

    if (form.value.password !== form.value.password2) {
      alert('Passwords not matching');
    } else {
      alert('Logged In')
    }
  }

  register(){
    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
      "password2" : this.password2
    };
    this.http.post("http://localhost:8080/api/register",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("User Registered Successfuly, you can now login");
      this.router.navigateByUrl('/login');
    });
  }
  save()
  {
    this.register();
  }
}
