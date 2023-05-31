import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interface/user';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  searchTerm: string;
  searchKey: string;
  searchText = '';

  users: User[];
  title='';

  
  constructor(private userService : PostsService) { }

  ngOnInit(): void {
    this.retrieveUsers();

    this.userService.search.subscribe((val: any ) => {
      this.searchText = val;
    })
  }
  enteredSearchValue: string ='';

  // @Output()
  // searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  //Getting the movies
  retrieveUsers(): void {
    this.userService.findByTitle(this.searchText).subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  search(event: any) {
    this.userService.searchUsers(this.searchText);
  }
}
