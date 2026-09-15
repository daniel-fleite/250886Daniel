import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Products {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produtos',
  standalone: false,
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos {

  produtos: Products[] = [
    {
      id: 1,
      nome: 'Camiseta',
      preco: 79.99,
      descricao: 'Camiseta lisa',
      emEstoque: true
    },
    {
      id: 2,
      nome: 'Bermuda',
      preco: 59.99,
      descricao: 'Bermuda longa',
      emEstoque: true
    },
    {
      id: 3,
      nome: 'Moletom',
      preco: 109.99,
      descricao: 'Moletom canguru',
      emEstoque: false
    }
  ];

  constructor(private router: Router) {}

  verDetalhes(id: number): void {
    this.router.navigate(['/produto-detalhe', id]);
  }
}