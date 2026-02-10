import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSnapshot } from './revenue-snapshot';

describe('RevenueSnapshot', () => {
  let component: RevenueSnapshot;
  let fixture: ComponentFixture<RevenueSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
