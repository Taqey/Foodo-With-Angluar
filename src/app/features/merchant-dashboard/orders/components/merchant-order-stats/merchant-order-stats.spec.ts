import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantOrderStats } from './merchant-order-stats';

describe('MerchantOrderStats', () => {
  let component: MerchantOrderStats;
  let fixture: ComponentFixture<MerchantOrderStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantOrderStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantOrderStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
