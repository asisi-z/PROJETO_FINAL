import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionKey = 'mundo-fitness-authenticated';
  private readonly username = 'admin';
  private readonly password = '123456';

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }

  login(username: string, password: string): boolean {
    const credentialsAreValid = username === this.username && password === this.password;

    if (credentialsAreValid) {
      sessionStorage.setItem(this.sessionKey, 'true');
    }

    return credentialsAreValid;
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionKey);
  }
}
