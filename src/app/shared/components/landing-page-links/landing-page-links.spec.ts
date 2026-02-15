import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLinks } from './landing-page-links';

describe('LandingPageLinks', () => {
  let component: LandingPageLinks;
  let fixture: ComponentFixture<LandingPageLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
