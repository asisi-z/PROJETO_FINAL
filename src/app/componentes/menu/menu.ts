import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menuOpen = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    const wantsToLogout = window.confirm('Tem certeza que deseja sair do site?');

    if (!wantsToLogout) {
      return;
    }

    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
