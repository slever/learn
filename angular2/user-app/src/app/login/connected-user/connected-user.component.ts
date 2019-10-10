import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/common/security/logged-user.service';
import { User } from 'src/app/model/user';
import { userRouting } from 'src/app/users/users.route';
import { Router } from '@angular/router';

@Component({
  selector: 'usr-connected-user',
  templateUrl: './connected-user.component.html',
  styleUrls: ['./connected-user.component.scss']
})
export class ConnectedUserComponent implements OnInit {

  /*isLogged: boolean;*/

  constructor(private loggedUserService: LoggedUserService,
              private router: Router ) { }

  ngOnInit() {
    /*this.isLogged = this.loggedUserService.isLoggedUser();*/
  }

  isLogged(): boolean {
    const isLogged = this.loggedUserService.isLoggedUser();
    console.log('isLogged?' + isLogged);
    return isLogged;
  }

  getUser(): string {
    const user = this.loggedUserService.getUser();
    return user.firstName + ' ' + user.lastName;
  }

  logout() {
    this.loggedUserService.setUser(null);
    this.router.navigate(['login']);
  }

}
