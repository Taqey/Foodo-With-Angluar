import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrdersSnapshot } from './pending-orders-snapshot';

describe('PendingOrdersSnapshot', () => {
  let component: PendingOrdersSnapshot;
  let fixture: ComponentFixture<PendingOrdersSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingOrdersSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOrdersSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
