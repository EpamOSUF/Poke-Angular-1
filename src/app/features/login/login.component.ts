import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { email: '', password: '', };
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

    createForm() {
     return new FormGroup({
        email: new FormControl(this.loginData.email,[
          Validators.required,
        ]),
        password: new FormControl(this.loginData.password,[
          Validators.required,
        ])
      })
    }

  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  handleLogin() {
    this.authService.login({
      email: this.email.value,
      password: this.password.value
    });
  }
}
