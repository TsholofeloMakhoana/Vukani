import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/posts';
import { CrudStatusService } from 'src/app/services/StatusService/crud-status.service';
import { User } from 'src/app/services/UsersService/User';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit{

  posts1: Posts[] = [];
  @Input() post?: Posts;
   public loggedObject :any

  constructor(
    private postService: PostsService,
    public crudStatus: CrudStatusService
  ){}

  getPosts() {
    this.getPostUser()
    this.postService.getAllPosts().subscribe(data => {
      this.loggedObject = localStorage.getItem("username")
      

      this.posts1 = data;
      console.log(data);
      
      
      
    })
  }

  getPostUser(){
   // loggedObject = localStorage.getItem("username")
   
  }

  ngOnInit(): void {
    this.getPosts();
    
  }

}
