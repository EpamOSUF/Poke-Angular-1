import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeightPipe } from './pipes/weight-pipe.pipe';
import { HeightPipe } from './pipes/height-pipe.pipe';

@NgModule({
  declarations: [
    WeightPipe,
    HeightPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WeightPipe,
    HeightPipe
  ]
})
export class SharedModule { }
