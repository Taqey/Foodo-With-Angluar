import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFilter } from './restaurant-filter';

describe('RestaurantFilter', () => {
  let component: RestaurantFilter;
  let fixture: ComponentFixture<RestaurantFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
