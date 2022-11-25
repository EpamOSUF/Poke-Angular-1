import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, } from 'rxjs';

import { Router } from "@angular/router";

import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient,
              private sessionStorageService: SessionStorageService,
              private router: Router) { }

  login(loginData: loginData): void {
    this.http.post<responseLogin>(environment.backendApi + 'auth', loginData).subscribe(loginData => {
      this.sessionStorageService.setToken(loginData.token);
      this.router.navigate(['/poke-list']);
    })
  }

  logout() {
    this.isAuthorized$$.next(false);
    this.sessionStorageService.removeToken();
    this.router.navigate(['/login']);
  }

  register(registerData: registerData): Observable<responseRegistration> {
    return this.http.post<responseRegistration>(environment.backendApi + 'register/', registerData);
  }

  private hasToken(): boolean {
      return !!this.sessionStorageService.getToken();
    }

  isAutorized$(): Observable<boolean> {
    return this.isAuthorized$$.asObservable();
  }

}

export interface loginData{
  email: string;
  password: string;
}

export interface registerData{
  name: string;
  email: string;
  password: string;
}

export interface responseLogin
  {
  "ok": boolean,
  "user": {
    "email": string,
    "name": string | null
  },
  "token": string
}

export interface responseRegistration{
  "successful": boolean,
  "result": string
}
