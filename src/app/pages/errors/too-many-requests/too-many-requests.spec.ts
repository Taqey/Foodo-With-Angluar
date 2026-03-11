import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooManyRequests } from './too-many-requests';

describe('TooManyRequests', () => {
  let component: TooManyRequests;
  let fixture: ComponentFixture<TooManyRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooManyRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooManyRequests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
