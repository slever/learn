import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { HasNameDirective } from './has-name.directive';
import { By } from '@angular/platform-browser';
import { LoggedUserService } from '../common/security/logged-user.service';
import { User } from '../model/user';

@Component({
  template: '<div *usrHasName="this.user">test</div>'
})
export class TestComponent {
  public user: string;

  constructor() {
    this.user = 'vador';
  }
}

class MockUserLoggedService {
  getUser() {
    const user1 = new User();
    user1.firstName = 'dark';
    user1.lastName = 'vador';
    return user1;
  }
}

describe('HasNameDirective', () => {
  let fixture: any;
  let comp: any;
  let debug: any;
  let html: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, HasNameDirective ],
      providers: [ {provide: LoggedUserService, useClass: MockUserLoggedService } ]
    });
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    debug = fixture.debugElement;
    html = debug.nativeElement;
    fixture.detectChanges();
  }));

  it ('should create', () => {
    expect(comp).toBeDefined();
  });

  it('should find the <div>)', () => {
    expect(html.querySelector('div').textContent).toBe('test');
  });

  it('should not find the <div>)', () => {
    comp.user = 'ddddd';
    fixture.detectChanges();
    expect(html.querySelector('div')).toBeNull();
  });
});
