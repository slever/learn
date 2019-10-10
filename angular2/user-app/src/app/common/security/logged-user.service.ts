import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { isNullOrUndefined } from 'util';
import { setDefaultService } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  user: User;

  constructor() { }

  isLoggedUser(): boolean {
    return !isNullOrUndefined(this.user);
  }

  setUser( usr: User ) {
    this.user = usr;
  }

  getUser(): User {
    return this.user;
  }
}
