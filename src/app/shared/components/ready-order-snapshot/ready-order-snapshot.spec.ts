import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyOrderSnapshot } from './ready-order-snapshot';

describe('ReadyOrderSnapshot', () => {
  let component: ReadyOrderSnapshot;
  let fixture: ComponentFixture<ReadyOrderSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyOrderSnapshot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyOrderSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
