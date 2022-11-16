import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeItemComponent } from './poke-item.component';
import { HeightPipe } from 'src/app/shared/pipes/height-pipe.pipe';
import { WeightPipe } from 'src/app/shared/pipes/weight-pipe.pipe';


@NgModule({
  declarations: [PokeItemComponent],
  imports: [
    CommonModule,
    HeightPipe,
    WeightPipe
  ],
  exports: [PokeItemComponent]
})
export class PokeItemModule { }
