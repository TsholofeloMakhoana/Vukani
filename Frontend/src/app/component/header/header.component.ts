import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
search(arg0: string) {
throw new Error('Method not implemented.');

}

  isLoggedIn$!: Observable<boolean>;
  searchText:string = '';

  constructor(private authService: CommonService){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
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
}
