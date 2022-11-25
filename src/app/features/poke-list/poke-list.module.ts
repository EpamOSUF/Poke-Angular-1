import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeListComponent } from './poke-list.component';


import { PokeItemModule } from '../poke-item/poke-item.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PokeListComponent
  ],
  imports: [
    CommonModule,
    PokeItemModule,
    SharedModule
  ],
  exports: [
    PokeListComponent
  ]
})
export class PokeListModule { }
