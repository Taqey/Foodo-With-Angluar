import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSnapshot } from './customers-snapshot';

describe('CustomersSnapshot', () => {
  let component: CustomersSnapshot;
  let fixture: ComponentFixture<CustomersSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
