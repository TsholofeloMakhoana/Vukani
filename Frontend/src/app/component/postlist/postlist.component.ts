import { Component, OnInit } from '@angular/core';
import { CrudStatusService } from '../../services/StatusService/crud-status.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  Posts:any = [];
 
  constructor(private crudStatusService: CrudStatusService) { }
 
  ngOnInit(): void {
    this.crudStatusService.GetPosts().subscribe(res => {
      console.log(res,"11111")
      this.Posts =res;
    });    
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudStatusService.deletePost(id).subscribe((res) => {
        this.Posts.splice(i, 1);
      })
    }
  }
}
