import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject(WINDOW) window: Window) {
  }

  setToken(token: string) {
    window.sessionStorage.setItem('token',token)
  }

  getToken():string | null {
    return window.sessionStorage.getItem('token')
  }

  removeToken() {
    window.sessionStorage.removeItem('token')
  }

}
