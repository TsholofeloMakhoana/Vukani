import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: User): void {
    if (user.email !== '' && user.password !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['home']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['login']);
  }
}
