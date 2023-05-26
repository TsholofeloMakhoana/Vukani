import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth.guard';
import { SearchlistComponent } from './component/searchlist/searchlist.component';
import { PostCardComponent } from './component/post-card/post-card.component';
import { AddPostComponent } from './component/add-post/add-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'searchlist', component: SearchlistComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
