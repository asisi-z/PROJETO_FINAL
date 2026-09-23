import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  feedbackMessage = '';

  cadastrar(): void {
    this.feedbackMessage = 'Cadastro preenchido com sucesso!';
  }
}
