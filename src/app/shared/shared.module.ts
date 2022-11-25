import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { WeightPipe } from './pipes/weight-pipe.pipe';
import { HeightPipe } from './pipes/height-pipe.pipe';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

import { InterceptorService } from '../auth/services/interceptor.service';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    WeightPipe,
    HeightPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    WeightPipe,
    HeightPipe
  ],
  providers: [Window, {
      provide : HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi   : true,
    },],
})
export class SharedModule { }
