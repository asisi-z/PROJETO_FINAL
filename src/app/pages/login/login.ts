import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements AfterViewInit {
  username = '';
  password = '';
  feedbackMessage = '';
  isError = false;
  currentSlide = 0;

  @ViewChild('carousel') carousel?: ElementRef<HTMLElement>;
  @ViewChildren('slide') slides?: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChildren('dot') dots?: QueryList<ElementRef<HTMLButtonElement>>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.feedbackMessage = 'Autenticação realizada com sucesso!';
      this.isError = false;
      this.router.navigate(['/entrada']);
      return;
    }

    this.feedbackMessage = 'Usuário ou senha inválidos.';
    this.isError = true;
  }

  ngAfterViewInit(): void {
    window.setInterval(() => this.showSlide(this.currentSlide + 1), 5000);
  }

  showSlide(index: number): void {
    const slides = this.slides?.toArray() ?? [];
    const dots = this.dots?.toArray() ?? [];

    if (!slides.length) {
      return;
    }

    this.currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.nativeElement.classList.toggle('active', slideIndex === this.currentSlide);
    });
    dots.forEach((dot, dotIndex) => {
      dot.nativeElement.classList.toggle('active', dotIndex === this.currentSlide);
    });
  }

}
