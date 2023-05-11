import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private api:HttpClient) { 

  }

  uploadImage(vals) : Observable<any>{
    let data = vals;

    return this.api.post(
      'https://api.cloudinary.com/v1_1/dx7c7wkhu/image/upload',
      data
    )
  }
}

