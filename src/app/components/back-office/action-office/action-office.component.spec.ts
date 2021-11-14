import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOfficeComponent } from './action-office.component';

describe('ActionOfficeComponent', () => {
  let component: ActionOfficeComponent;
  let fixture: ComponentFixture<ActionOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
