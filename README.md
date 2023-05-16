## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Product Pages

O projeto contém duas estruturas de Página de produtos: uma utilizando pages e outra utilizando a estrutura app do nextjs.

Para acessar o exemplo de produto utilizando pages, acesse [http://localhost:3000/pdp/1](http://localhost:3000/pdp/1).
Essa estrutura contém uma página básica de produto, com algumas informações e uma vitrine de recomendados. Foi adicionado a biblioteca de react-html-parser para mostrar como as bibliotecas adicionadas são enviadas para o cliente.

Já, para acessar a estrutura de server components, acesse [http://localhost:3000/rsc/1](http://localhost:3000/rsc/1). É a mesma estrutura (replicada), apenas para mostrar como o RSC é similar ao modo tradicional de programar, e também mostrar como bibliotecas que são carregadas em server components não são enviadas para o cliente final, reduzindo tamanho do bundle geral da página.

## Objetivo

Esse projeto faz parte de uma apresentação sobre Server Components utilizando React, e algumas comparações foram feitas para demonstrar o potencial e algumas das vantagens de se estruturar esse novo 'modelo mental' de trabalhar.

É um projeto super simples pra demonstrar o conceito. Layout e estrutura de códigos não está adequados, uma vez que o objetivo era apenas demonstrar como RSC funciona utilizando nextjs.

As informações de produtos são obtidas da [https://fakestoreapi.com](https://fakestoreapi.com), como forma de facilitar a validação e apresentação das propriedades dos server components.

Para mais informações, acessar a documentação do Nextjs, que contém muita informação sobre as estruturas, padrões, benefícios e vantagens dessa nova estrutura.
