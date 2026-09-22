import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  logout(): void {
    const wantsToLogout = window.confirm('Tem certeza que deseja sair do site?');

    if (!wantsToLogout) {
      return;
    }

    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
