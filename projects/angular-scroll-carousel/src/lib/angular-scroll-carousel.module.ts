import { NgModule, ModuleWithProviders, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularScrollCarouselComponent, AngularSkeletonComponent } from './angular-scroll-carousel.component';
import { SkeletonLoaderConfig, SKELETON_LOADER_CONFIG } from './skeleton-loader-config.types';


@NgModule({
  declarations: [
    AngularScrollCarouselComponent,
    AngularSkeletonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AngularScrollCarouselComponent,
    AngularSkeletonComponent,
  ]
})
export class AngularScrollCarouselModule { }

