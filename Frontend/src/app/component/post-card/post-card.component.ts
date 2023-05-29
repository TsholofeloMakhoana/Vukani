import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/interface/posts';
import { CrudStatusService } from 'src/app/services/StatusService/crud-status.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit{

  posts1: Posts[] = [];
  @Input() post?: Posts;

  constructor(
    private postService: PostsService,
    public crudStatus: CrudStatusService
  ){}

  getPosts(){
    this.postService.getAllPosts().subscribe(data => {
      this.posts1 = data;
      console.log(this.posts1,"posts 1");
    })
  }

  ngOnInit(): void {
    this.getPosts();
    
  }

}
