import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {
    // Check the initial authentication status when the service is constructed
    this.checkAuthenticationStatus();
  }

  private checkAuthenticationStatus(): void {
    // Use try-catch to handle scenarios where localStorage is not available
    try {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      this.isAuthenticatedSubject.next(isAuthenticated);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }

  private updateAuthenticationStatus(isAuthenticated: boolean): void {
    try {
      localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
      this.isAuthenticatedSubject.next(isAuthenticated);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }

  // Methods to handle authentication state
  login(): void {
    // Perform authentication logic
    this.updateAuthenticationStatus(true);

    // Redirect to the customer dashboard
    this.router.navigate(['/customer']);
  }

  logout(): void {
    // Perform logout logic
    this.updateAuthenticationStatus(false);

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
