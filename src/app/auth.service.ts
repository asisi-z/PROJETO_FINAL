import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionKey = 'mundo-fitness-authenticated';
  private readonly registrationKey = 'mundo-fitness-cadastro';

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }

  login(email: string, password: string): boolean {
    const savedRegistration = localStorage.getItem(this.registrationKey);

    if (!savedRegistration) {
      return false;
    }

    let registration: { email?: string; senha?: string };

    try {
      registration = JSON.parse(savedRegistration);
    } catch {
      return false;
    }

    const credentialsAreValid = email === registration.email && password === registration.senha;

    if (credentialsAreValid) {
      sessionStorage.setItem(this.sessionKey, 'true');
    }

    return credentialsAreValid;
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionKey);
  }
}
