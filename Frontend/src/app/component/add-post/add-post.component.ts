import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { User } from 'src/app/interface/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers:[UploadService]
})
export class AddPostComponent implements OnInit{

  files: File[] = [];
  description: string = "";
  title: string = "";
  user1: User;
  postForm: FormGroup;

  form: any;




  constructor(private _uploadService: UploadService,
      private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private postService: PostsService) {
  }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      imageUrl: new FormControl(),
      postedBy: new FormControl(),
      username: new FormControl()

  });
 
  }


  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload(){
    if(!this.files[0]){
      alert("Can't submit empty post");
    }

    //upload my image on cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset','angular_cloudinary');
    data.append('cloud_name', 'dx7c7wkhu');
    console.log(file_data,"our file dat");
    
    
    


    let user : User
    let loggedUser = localStorage.getItem("loggedUser")
    if(loggedUser){
        user = JSON.parse(loggedUser)     
    }
    



    this._uploadService.uploadImage(data).subscribe((response) => {

  
      let url = response.url
      



      let postData: any = this.postForm.value
      postData.imageUrl = url;
      postData.postedBy = user.id;
      postData.username = user.email

      console.log(postData,"got attribs");
      
      
      this.http.
        post('http://localhost:8080/api/posts', postData)
        .subscribe((resultData: any) => {
          
          alert('Successfuly uploaded');
          this.router.navigateByUrl('/home');
         });
    });


    //  let postData: any = this.postForm.value
    //   console.log(postData,"got attribs");
      
      
    //   this.http.
    //     post('http://localhost:8080/api/posts', postData)
    //     .subscribe((resultData: any) => {
          
    //       alert('Successfuly uploaded');
    //       this.router.navigateByUrl('/home');
    //      });
  }
}