import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogout = () => {
    this.authService.logout();
  }
}
