import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers:[UploadService]
})
export class AddPostComponent {
  files: File[] = [];

  constructor(private _uploadService: UploadService){
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload(){
    if(!this.files[0]){
      alert("Please upload an image");
    }

    //upload my image on cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset','angular_cloudinary');
    data.append('cloud_name','dx7c7wkhu');

    this._uploadService.uploadImage(data).subscribe((response) => {
    
        console.log(response);

//         let data = {
// name:"dsf",
// image:response.url
//         }
//  this._uploadService.uploadImage(data).subscribe((response) => {}     
    });
  }
}