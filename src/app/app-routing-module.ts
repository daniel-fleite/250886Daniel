import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Sobre } from './sobre/sobre';

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'produtos', component: Produtos},
  {path: 'produto-detalhe/:id', component: ProdutoDetalhe},
  {path: 'sobre', component: Sobre}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
