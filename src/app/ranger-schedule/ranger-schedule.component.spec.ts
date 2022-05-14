import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangerScheduleComponent } from './ranger-schedule.component';

describe('RangerScheduleComponent', () => {
  let component: RangerScheduleComponent;
  let fixture: ComponentFixture<RangerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangerScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
