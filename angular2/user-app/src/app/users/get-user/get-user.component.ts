import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { BaseDestroyableComponent } from 'src/app/common/BaseDestroyableComponent';

@Component({
  selector: 'usr-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent extends BaseDestroyableComponent {

  searchName: string;
  isUserFound: boolean;
  userFound: User;

  constructor(private service: UsersService) { super(); }

  getUser() {
    this.isUserFound = false;
    super.registerSubscribe(this.service.getUser(this.searchName),
      data => {
        this.userFound = data;
        this.isUserFound = true;
      },
      (err: any) => {
        console.error(err);
      }
    );
  }

  getFieldClass() {
    if (this.searchName === '') {
      return 'emptyField';
    } else if (this.isUserFound) {
      return 'found';
    } else {
      return 'notFound';
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.searchName = '';
    this.isUserFound = false;
  }


}
