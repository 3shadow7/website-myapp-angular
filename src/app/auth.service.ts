import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  static isLoggedIn: boolean;

  constructor(private router: Router) {}

  accepted() {
    this.loggedIn = true;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < 24; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters[randomIndex];
    }

    localStorage.setItem('token', `${token}`);
    this.router.navigate(['/home']);
  }

  signup(form: FormGroup<any>): boolean {
    const { name, email, password } = form.value;
    if (!name) form.get('name')?.setValue('guest');
    this.accepted();
    return true;
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === '12345678') {
      this.accepted();
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login'], { queryParams: { from: 'logout' } });
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    return !!token;
  }
}
