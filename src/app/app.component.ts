// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customerdashboard';
  currentYear: number = new Date().getFullYear();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check the authentication status when the component initializes
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        this.router.navigate(['/login']);
      }
    });
  }
}
