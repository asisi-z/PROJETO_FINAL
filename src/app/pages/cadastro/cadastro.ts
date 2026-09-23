import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  formCadastro: FormGroup;
  mensagem = '';

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      idade: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      lgpd: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      localStorage.setItem('mundo-fitness-cadastro', JSON.stringify(this.formCadastro.value));
      this.mensagem = 'Cadastro salvo com sucesso!';
    }
  }
}