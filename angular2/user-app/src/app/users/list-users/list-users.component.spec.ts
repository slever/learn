import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { User } from '../../model/user';
import { ListUsersComponent } from './list-users.component';
import { UsersService } from '../users.service';
import { of } from 'rxjs';

class MockUserService {

  getAllUsers() {
    const user1 = new User();
    user1.firstName = 'dark';
    user1.lastName = 'vador';
    const user2 = new User();
    user2.firstName = 'luke';
    user2.lastName = 'skywalker';

    const users = new Array();
    users.push(user1);
    users.push(user2);
    return of(users);
  }
}

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersComponent ],
      providers: [
        {provide: UsersService, useClass : MockUserService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init properly', () => {
    component.ngOnInit();
    expect(component.users.length).toBe(2);
    expect(component.users[0].firstName).toEqual('dark');
    expect(component.users[1].firstName).toEqual('luke');
  });
});
