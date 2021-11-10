import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardOfficeComponent } from './team-card-office.component';

describe('TeamCardOfficeComponent', () => {
  let component: TeamCardOfficeComponent;
  let fixture: ComponentFixture<TeamCardOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCardOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCardOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
