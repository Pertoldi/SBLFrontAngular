import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeauPresentationComponent } from './bandeau-presentation.component';

describe('BandeauPresentationComponent', () => {
  let component: BandeauPresentationComponent;
  let fixture: ComponentFixture<BandeauPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandeauPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeauPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
