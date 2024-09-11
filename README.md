<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> </p> <h1 align="center">Backend - Asset-stock System</h1> <p align="center">Um sistema de backend construído com o framework <a href="http://nodejs.org" target="_blank">Nest.js</a> para gerenciar um sistema de HelpDesk.</p> <p align="center"> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a> <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a> <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a> </p>
Sumário
Descrição
Funcionalidades
Tecnologias Utilizadas
Instalação
Configuração
Scripts Disponíveis
Estrutura de Diretórios
Endpoints da API
Recursos Adicionais
Licença
Descrição
Este projeto é o backend do sistema de HelpDesk, responsável pela lógica de negócios e comunicação com o banco de dados. Foi desenvolvido utilizando o NestJS, um framework progressivo para construção de aplicativos do lado do servidor eficientes e escaláveis.

Funcionalidades

API RESTful: Endpoints para gerenciar colaboradores, estoque, despesas e serviços.
Autenticação e Autorização: Suporte para autenticação de usuários e controle de permissões.
Validação de Dados: Valida a integridade e o formato dos dados recebidos.
Conexão com o Banco de Dados: Comunicação eficiente com o banco de dados para operações CRUD.
Tecnologias Utilizadas

Framework: NestJS

Linguagem: TypeScript

Banco de Dados: MySQL

Instalação

Clone este repositório:
bash

Copiar código
git clone [https://github.com/seu-usuario/helpdesk-backend.git](https://github.com/tanyse/backend-api/edit/main/README.md)

Acesse o diretório do projeto:
bash

Copiar código
cd backend-api

Instale as dependências:
bash

Copiar código
npm install

Configuração

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como:
makefile
Copiar código
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
PORT=3000

Scripts Disponíveis
start: Executa o servidor em modo de produção.
start:dev: Executa o servidor em modo de desenvolvimento com hot-reload.
start:prod: Compila e executa o servidor em modo de produção.
test: Executa testes unitários.
test:e2e: Executa testes de ponta a ponta (e2e).
test:cov: Gera um relatório de cobertura de testes.

Estrutura de Diretórios
plaintext

Copiar código
src/
|-- app.module.ts
|-- main.ts
|-- modules/
|   |-- users/
|   |   |-- users.controller.ts
|   |   |-- users.service.ts
|   |   |-- users.module.ts
|   |-- ...
|-- common/
|   |-- filters/
|   |-- interceptors/
|-- config/
|-- ...

Endpoints da API

Autenticação
POST /auth/login - Autentica um usuário.
POST /auth/register - Registra um novo usuário.

Colaboradores
GET /users - Retorna a lista de colaboradores.
POST /users - Adiciona um novo colaborador.

Estoque
GET /inventory - Retorna a lista de itens do estoque.
POST /inventory - Adiciona um novo item ao estoque.

Despesas
GET /expenses - Lista todas as despesas.
POST /expenses - Adiciona uma nova despesa.

Serviços
GET /services - Retorna a lista de serviços.
POST /services - Cria um novo serviço.

Licença
Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
