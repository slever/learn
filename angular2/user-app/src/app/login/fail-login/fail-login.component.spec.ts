import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailLoginComponent } from './fail-login.component';

describe('FailLoginComponent', () => {
  let component: FailLoginComponent;
  let fixture: ComponentFixture<FailLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
