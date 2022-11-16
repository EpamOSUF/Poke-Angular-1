import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeItemModule } from '../poke-item/poke-item.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokeItemModule,
    SharedModule
  ]
})
export class PokeListModule { }
