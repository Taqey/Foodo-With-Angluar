import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyChartSnapshot } from './weekly-chart-snapshot';

describe('WeeklyChartSnapshot', () => {
  let component: WeeklyChartSnapshot;
  let fixture: ComponentFixture<WeeklyChartSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyChartSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyChartSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
