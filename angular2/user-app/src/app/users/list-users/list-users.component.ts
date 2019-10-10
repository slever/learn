import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { BaseDestroyableComponent } from 'src/app/common/BaseDestroyableComponent';

@Component({
  selector: 'usr-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent extends BaseDestroyableComponent {

  users: Array<User>;

  constructor(private service: UsersService) { super(); }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log('init');
    this.registerSubscribe(this.service.getAllUsers(),
    data => {
      this.users = data || [];
    },
    (err: any) => {
      console.error(err);
    });
  }
}
