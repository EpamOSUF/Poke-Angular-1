import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [ CommonModule, SharedModule, FormsModule, ReactiveFormsModule ],
  exports: [
    LoginComponent
  ],
  providers: [AuthService, SessionStorageService],
})
export class LoginModule {}
