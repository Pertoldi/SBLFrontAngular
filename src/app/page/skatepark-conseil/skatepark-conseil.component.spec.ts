import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateparkConseilComponent } from './skatepark-conseil.component';

describe('SkateparkConseilComponent', () => {
  let component: SkateparkConseilComponent;
  let fixture: ComponentFixture<SkateparkConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkateparkConseilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkateparkConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
