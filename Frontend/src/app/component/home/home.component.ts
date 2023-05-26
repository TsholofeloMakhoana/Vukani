
import { Component, OnInit, NgZone,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CrudStatusService } from '../../services/StatusService/crud-status.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Posts } from 'src/app/interface/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit  {
  posts: Posts[] = [];

  @Input() post?: Posts;

  statusForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudStatusService,
    private postService: PostsService
  )
   { 
    this.statusForm = this.formBuilder.group({
      createdByName: localStorage.getItem("username"),
      createdOn: new Date(),
      comment: ['']
    })
  }

  getPosts(){
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    })
  }

  username = localStorage.getItem("username");
  ngOnInit() { 
    this.getPosts();
    console.log("view post");
  }
 
  onSubmit(): any {
    this.crudService.PostStatus(this.statusForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/home'))
      }, (err) => {
        console.log(err);
    });
  }
 
}
