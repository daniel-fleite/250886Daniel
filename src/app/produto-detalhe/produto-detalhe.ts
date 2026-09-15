import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe {
    id: string | null = null;

  constructor(private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');

  }
}
