import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { PostsService } from 'src/app/services/posts.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string;
  searchKey: string;

  users: User[];
  title='';
// search(arg0: string) {
// throw new Error('Method not implemented.');

// }

  isLoggedIn$!: Observable<boolean>;
  searchText:string = '';

  constructor(private authService: CommonService, private userService : PostsService){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.retrieveUsers();

    this.userService.search.subscribe((val: any ) => {
      this.searchTerm = val;
    })
  }

  username = localStorage.getItem("username");

  logout(){
    localStorage.setItem("username","");
    this.authService.logout();
  }
  onSearchTextEntered(searchValue:string){ 
   this.searchText = searchValue; 
   console.log(this.searchText);
  }

  //Getting the movies
  retrieveUsers(): void {
    this.userService.findByTitle(this.searchTerm).subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  search(event: any) {
    this.userService.searchUsers(this.searchTerm);
  }
}
