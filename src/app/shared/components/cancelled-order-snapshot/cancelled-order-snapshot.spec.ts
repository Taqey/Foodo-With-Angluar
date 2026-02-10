import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledOrderSnapshot } from './cancelled-order-snapshot';

describe('CancelledOrderSnapshot', () => {
  let component: CancelledOrderSnapshot;
  let fixture: ComponentFixture<CancelledOrderSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelledOrderSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledOrderSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
