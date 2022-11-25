import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW_PROVIDERS } from "./services/window.service";
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService, WINDOW_PROVIDERS]
})
export class AuthModule { }
