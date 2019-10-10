import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClient } from 'selenium-webdriver/http';
import { User } from '../model/user';
import { asyncData } from '../testing/async-observable-helpers';

describe('UsersService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let usersService: UsersService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    usersService = new UsersService(httpClientSpy as any);
  });

  it('should be created', () => {
    const service: UsersService = TestBed.get(usersService);
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {
    const expectedUsers: User[] =
    [{ firstName: 'test', lastName : 'test', userId : 'tt', password : 'yy' },
    { firstName: 'test2', lastName : 'test2', userId : 'tt', password : 'yy' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedUsers));

    usersService.getAllUsers().subscribe(
        users => expect(users).toEqual(expectedUsers, 'expected users'),
        fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return one user', () => {
    const expectedUsers: User = { firstName: 'test', lastName : 'test', userId : 'tt', password : 'yy' };

    httpClientSpy.get.and.returnValue(asyncData(expectedUsers));

    usersService.getUser('test').subscribe(
        user => expect(user).toEqual(expectedUsers[2], 'expected users'),
        fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
