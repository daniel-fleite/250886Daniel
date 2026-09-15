# 🛒 Sistema de Produtos - Angular

Projeto desenvolvido em Angular como atividade prática para trabalhar conceitos de componentes, rotas, interpolação, diretivas e navegação entre páginas.

## 📋 Sobre o Projeto

O projeto simula uma pequena loja virtual, contendo uma página inicial, uma página de produtos e uma página de detalhes de cada produto.

Os produtos são carregados a partir de um array definido no componente e possuem informações como:

- ID
- Nome
- Preço
- Descrição
- Status de estoque

O projeto também utiliza rotas para permitir a navegação entre as diferentes páginas.

## 🚀 Funcionalidades

### 🏠 Página Inicial

A página inicial possui um banner promocional que pode ser exibido ou ocultado.

Foi utilizada a propriedade booleana:

```ts
showBanner: boolean = true;
```

O controle da exibição é feito utilizando `@if`.

Também existe um botão que alterna entre:

- Mostrar Banner
- Ocultar Banner

### 🛍️ Página de Produtos

A página de produtos apresenta uma lista de produtos carregada a partir de um array no componente.

Cada produto possui:

- ID
- Nome
- Preço
- Descrição
- Status de estoque

A lista é exibida utilizando `*ngFor`.

Caso o array esteja vazio, é exibida a mensagem:

"Nenhum produto disponível no momento"

### 📦 Controle de Estoque

Cada produto possui uma propriedade `emEstoque`, que determina se ele está disponível para compra.

Quando o produto está fora de estoque:

- O botão "Comprar" fica desabilitado.
- O botão recebe a classe `fora-estoque`.
- A cor do botão é alterada para cinza.

Foi utilizado property binding:

```html
[disabled]="!produto.emEstoque"
```

E `ngClass`:

```html
[ngClass]="{ 'fora-estoque': !produto.emEstoque }"
```

### 🔎 Página de Detalhes do Produto

Ao clicar em "Comprar", o usuário é direcionado para a página de detalhes do produto.

A navegação utiliza o ID do produto como parâmetro da rota.

Exemplo:

```text
/produto-detalhe/2
```

A página utiliza `ActivatedRoute` para capturar o ID enviado pela URL.

Depois, o ID é utilizado para localizar o produto correspondente dentro do array.

A página de detalhes exibe:

- Nome
- Preço
- Descrição
- Status do estoque

## 🛣️ Rotas

O projeto possui as seguintes rotas principais:

```text
/home
/produtos
/produto-detalhe/:id
```

A rota dinâmica:

```text
/produto-detalhe/:id
```

permite receber o ID do produto pela URL.

Por exemplo:

```text
/produto-detalhe/2
```

## 🧠 Conceitos Utilizados

Durante o desenvolvimento foram utilizados conceitos importantes do Angular:

- Componentes
- Interpolação `{{ }}`
- Property Binding
- Event Binding
- `@if`
- `*ngFor`
- `ngClass`
- `Router`
- `ActivatedRoute`
- Rotas
- Parâmetros de rota
- Arrays
- Interfaces em TypeScript
- Métodos de componentes
- Operador ternário
- Método `find()`

## 🛠️ Tecnologias

- Angular
- TypeScript
- HTML
- CSS

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
ng serve
```

Depois acesse:

```text
http://localhost:4200
```

## 👨‍💻 Autor

Daniel Leite

Projeto desenvolvido para fins acadêmicos e de aprendizado em Angular.
