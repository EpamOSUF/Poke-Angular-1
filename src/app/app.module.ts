import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/services/interceptor.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { PokeListModule } from './features/poke-list/poke-list.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PokeListModule,
    SharedModule,
    LoginModule,
  ],
  providers: [Window, {
      provide : HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi   : true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
