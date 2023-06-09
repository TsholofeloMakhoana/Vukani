import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interface/posts';
import { User } from '../interface/user';

const url = 'http://localhost:8080/api/posts';
const userUrl = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public search = new BehaviorSubject<string>("");

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Array<Posts>> {
    return this.httpClient.get<Array<Posts>>(
      `${url}`
    )
  }
  getAllUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(
      `${userUrl}`
    )
  }

  getPost(id: string): Observable<Posts> {
    return this.httpClient.get<Posts>(`${url}/${id}`);
  }

  getProfile(): Observable<Posts> {
    return this.httpClient.get<Posts>(
      `${userUrl}`
    )
  }

  findByTitle(title: any): Observable<User[]> {
    return this.httpClient.get<User[]>(`${userUrl}?title=${title}`);
  }

  searchUsers(searchText: string){
    this.search.next(searchText)
  }
}
