import { InjectionToken } from '@angular/core';

export type SkeletonLoaderConfigTheme = {
  // This is required since ngStyle is using `any` as well
  // More details in https://angular.io/api/common/NgStyle
  // tslint:disable-next-line: no-any
  [k: string]: any;
} | null;

export interface SkeletonLoaderConfig {
  appearance: 'circle' | 'line' | '';
  animation: 'progress' | 'progress-dark' | 'pulse' | 'false' | false;
  theme: SkeletonLoaderConfigTheme;
  loadingText: string;
  count: number;
  ariaLabel: string;
}

export const SKELETON_LOADER_CONFIG = new InjectionToken<SkeletonLoaderConfig>('skeleton-loader.config');