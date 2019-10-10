import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  getAllUsers() {
    return this.http.get<Array<User>>('/user');
  }

  getUser(lastName: string) {
    return this.http.get<User>('/user/' + lastName);
  }
}
