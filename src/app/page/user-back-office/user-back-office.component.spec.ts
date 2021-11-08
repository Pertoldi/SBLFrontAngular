import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBackOfficeComponent } from './user-back-office.component';

describe('UserBackOfficeComponent', () => {
  let component: UserBackOfficeComponent;
  let fixture: ComponentFixture<UserBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBackOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
