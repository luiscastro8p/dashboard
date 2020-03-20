import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationEditComponent } from './user-notification-edit.component';

describe('UserNotificationEditComponent', () => {
  let component: UserNotificationEditComponent;
  let fixture: ComponentFixture<UserNotificationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotificationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
