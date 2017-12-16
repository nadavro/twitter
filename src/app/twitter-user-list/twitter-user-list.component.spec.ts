import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterUserListComponent } from './twitter-user-list.component';

describe('TwitterUserListComponent', () => {
  let component: TwitterUserListComponent;
  let fixture: ComponentFixture<TwitterUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
