import { Component, OnInit } from '@angular/core';
import { BaseDestroyableComponent } from 'src/app/common/BaseDestroyableComponent';
import { User } from 'src/app/model/user';
import { Form, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { routing } from 'src/app/app.route';
import { LoggedUserService } from 'src/app/common/security/logged-user.service';
import { DisplayMessageComponent } from 'src/app/common/display-message/display-message.component';
import { MessageErrService } from 'src/app/common/message-error.service';

@Component({
  selector: 'usr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseDestroyableComponent {
  user: User;
  loginSuccess: boolean;
  loggedUser: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private loggedUserService: LoggedUserService,
              private messageErrService: MessageErrService) { super(); }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.user = new User();
    this.loginSuccess = false;
  }

  login(form: NgForm) {
    if (form.valid) {
      console.log('login');
      this.registerSubscribe(this.loginService.checkLogin(this.user),
      u => {
        this.loginSuccess = true;
        this.loggedUser = u.firstName + ' ' + u.lastName;
        // TODO

        this.loggedUserService.setUser(u);

        this.router.navigate(['menuUser']);
      },
      (error: any) => {
        console.error(error);
        this.loggedUserService.setUser(null);
        this.router.navigate(['login/failLogin']);
        this.messageErrService.emit('the login/pasword is not correct');
      }
      )
      ;
    }
  }

}
