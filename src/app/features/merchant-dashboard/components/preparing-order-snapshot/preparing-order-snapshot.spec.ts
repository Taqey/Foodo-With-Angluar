import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingOrderSnapshot } from './preparing-order-snapshot';

describe('PreparingOrderSnapshot', () => {
  let component: PreparingOrderSnapshot;
  let fixture: ComponentFixture<PreparingOrderSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparingOrderSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparingOrderSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
