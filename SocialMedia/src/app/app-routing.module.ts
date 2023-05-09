import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddPostComponent } from './component/add-post/add-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
