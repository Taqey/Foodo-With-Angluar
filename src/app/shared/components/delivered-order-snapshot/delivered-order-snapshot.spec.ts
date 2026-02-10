import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredOrderSnapshot } from './delivered-order-snapshot';

describe('DeliveredOrderSnapshot', () => {
  let component: DeliveredOrderSnapshot;
  let fixture: ComponentFixture<DeliveredOrderSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveredOrderSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredOrderSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
