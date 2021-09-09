import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularScrollCarouselComponent } from './angular-scroll-carousel.component';

describe('AngularScrollCarouselComponent', () => {
  let component: AngularScrollCarouselComponent;
  let fixture: ComponentFixture<AngularScrollCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularScrollCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularScrollCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
