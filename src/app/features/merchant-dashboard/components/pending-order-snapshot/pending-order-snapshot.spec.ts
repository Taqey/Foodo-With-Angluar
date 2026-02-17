import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrderSnapshot } from './pending-order-snapshot';

describe('PendingOrderSnapshot', () => {
  let component: PendingOrderSnapshot;
  let fixture: ComponentFixture<PendingOrderSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingOrderSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOrderSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
