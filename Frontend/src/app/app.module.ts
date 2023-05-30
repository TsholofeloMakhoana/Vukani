import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { CommonService } from './services/common.service';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { FormGroup,  FormBuilder,  Validators, ReactiveFormsModule } from '@angular/forms';


import { PostlistComponent } from './component/postlist/postlist.component';
import { EditPostComponent } from './component/edit-post/edit-post.component';


import { SearchComponentComponent } from './component/search-component/search-component.component';
import { SearchlistComponent } from './component/searchlist/searchlist.component';
import { PostCardComponent } from './component/post-card/post-card.component';
import { AddPostComponent } from './component/add-post/add-post.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,

 
    PostlistComponent,
    EditPostComponent
,
    SearchComponentComponent,
    SearchlistComponent,
    PostCardComponent,
    AddPostComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    ReactiveFormsModule,
    NgxDropzoneModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  
  providers: [AuthGuard,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  title = 'Angular Form Validation ';
   angForm: FormGroup | undefined;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }
}
