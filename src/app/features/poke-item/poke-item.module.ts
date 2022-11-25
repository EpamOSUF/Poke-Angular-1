import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeItemComponent } from './poke-item.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PokeItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PokeItemComponent]
})
export class PokeItemModule { }
