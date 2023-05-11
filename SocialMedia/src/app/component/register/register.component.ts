import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  register(){
    let bodyData = {
      "firstname" : this.firstname,
      "lastname" : this.firstname,
      "email" : this.firstname,
      "password" : this.firstname,
      "password2" : this.password2
    };
    this.http.post("http://localhost:8080/api/register",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("User Registered Successfuly");
    });
  }
  save()
  {
    this.register();
  }
}
