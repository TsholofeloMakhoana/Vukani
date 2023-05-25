import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/services/UsersService/friend.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.scss']
})  
export class SearchlistComponent implements OnInit {

 
  User:any = [];
 
  constructor(private friendService: FriendService) { }

  username = localStorage.getItem("username");
  
  ngOnInit(): void {
    this.friendService.GetFriends().subscribe(res => {
      console.log(res)
      this.User =res;
    });    
  }
}
