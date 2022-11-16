import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokeListComponent } from './features/poke-list/poke-list.component';
import { PokeItemComponent } from './features/poke-item/poke-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent, PokeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
