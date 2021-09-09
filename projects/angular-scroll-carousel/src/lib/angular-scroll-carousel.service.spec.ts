import { TestBed } from '@angular/core/testing';

import { AngularScrollCarouselService } from './angular-scroll-carousel.service';

describe('AngularScrollCarouselService', () => {
  let service: AngularScrollCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularScrollCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
