import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokeListComponent } from './features/poke-list/poke-list.component';

import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {path: 'poke-list/page/:pageCount', component: PokeListComponent, canActivate:[AuthorizedGuard]},
  {path: 'poke-list', component: PokeListComponent,canActivate:[AuthorizedGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: LoginComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
