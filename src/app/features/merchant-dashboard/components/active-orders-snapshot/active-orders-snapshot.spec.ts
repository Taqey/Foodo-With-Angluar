import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersSnapshot } from './active-orders-snapshot';

describe('ActiveOrdersSnapshot', () => {
  let component: ActiveOrdersSnapshot;
  let fixture: ComponentFixture<ActiveOrdersSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveOrdersSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOrdersSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
