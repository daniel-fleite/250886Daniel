import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Produtos } from './produtos/produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Sobre } from './sobre/sobre';

@NgModule({
  declarations: [App, Home, Produtos, ProdutoDetalhe, Sobre],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
