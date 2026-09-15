import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Products {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe {

  produto: Products | undefined;

  produtos: Products[] = [
    {
      id: 1,
      nome: `Camiseta`,
      preco: 79.99,
      descricao: `Camiseta lisa`,
      emEstoque: true
    },
    {
      id: 2,
      nome: `Bermuda`,
      preco: 59.99,
      descricao: `Bermuda longa`,
      emEstoque: true
    },
    {
      id: 3,
      nome: `Moletom`,
      preco: 109.99,
      descricao: `Moletom canguru`,
      emEstoque: false
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.produto = this.produtos.find(produto => produto.id === id);

  }
}