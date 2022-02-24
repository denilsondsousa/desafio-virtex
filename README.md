<h1 align="center">
    Virtex Telecom
    <br>Desafio – VirteX - Desenvolvimento<br/>
</h1>

<p align="center">
  <a href="#notebook_with_decorative_cover-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-uso">Uso</a>
</p>

## :notebook_with_decorative_cover: Sobre

Pequeno desafio para processo de seleção do time de Desenvolvimento da VirteX, ele aborda
tudo o que utilizamos um pouco aqui:
- Interpretação de Texto para Dados (obtenção de dados de equipamentos);
- Desenvolvimento Backend, para criar um Web Server que entregue os dados da etapa
anterior, mas consultados dentro de um banco de dados;
- Criação de um banco de dados simples (subindo a infraestrutura e modelagem);
- Um simples FrontEnd que exige os dados deste Backend.

## :computer: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
  O TypeScript é uma ferramente que traz ganho de produtividade e resulta em um produto mais robusto.
- [Eslint](https://eslint.org/)
  Identifica padrões de código em desacordo com as regras pré-estabelecidas.
- [Prettier](https://prettier.io/)
  Responsável por formatar o código de acordo com essas regras.
- [ReactJS](https://reactjs.org/)
  Biblioteca javascript com foco em criar interfaces para usuários
- [Next.js](https://nextjs.org/)
  É um framework do React com foco em produção e eficiência, utilizado para criar o frontend deste projeto.
- [NodeJS](https://nodejs.org/)
  Permite a compilação de códigos em javascript, utilizado para criar o backend deste projeto.
- [Docker](https://www.docker.com/)
  Utilizado para criar um ambiente isolado, no caso deste projeto, o Banco de dados.
- [Docker Compose](https://docs.docker.com/compose/)
  Utilizado para compartilhar aplicativos entre vários ambientes.
- [TypeORM](https://typeorm.io/#/)
  É um ORM utilizado para gerenciamento de objetos-relacionados, seu objetivo é aproximar aplicações orientadas a objeto ao paradigma de banco de dados relacionais.
- [Axios](https://axios-http.com/docs/intro)
  O axios é uma ferramenta utilizada para fazer requisições Http.

## :rocket: Executando

- ### **Pré-requisitos**
  - **[Git](https://git-scm.com/)**
  - Um gerenciador de Pacotes: **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - **[Docker](https://www.docker.com/)** e **[Docker Compose](https://docs.docker.com/compose/)** instalados na máquina.

1. Faça um clone do repositório:

```sh
  git clone https://github.com/denilsondsousa/desafio-virtex.git
```
2.Preparando o Banco de Dados

```sh
#Na pasta raiz do projeto execute o comando abaixo para criar o Banco de dados no Docker
docker-compose up
```
3. Para executar o Web Server da aplicação:

```sh
  #Entre na pasta do Backend
  $ cd backend

  # Primeiro: instale as dependências do projeto
  $ yarn # ou npm install

  # Lembre-se: É necessário subir na primeira vez de uso a infraestrutura e modelagem do Banco de dados, para isso execute:
  $ yarn typeorm migrations:run #ou npm typeorm migrations:run

  #Com dependencias instaladas e banco de dados criado, basta iniciliazar a aplicação!

  # Inicializando a aplicação:
  $ yarn dev # ou npm dev

  #Deixe o server em execução
```


4. Para executar o Frontend da aplicação:

```sh
  #Entre na pasta do Frontend
  $ cd frontend

  # Primeiro: instale as dependências do projeto
  $ yarn # ou npm install

  # Inicializando a aplicação:
  $ yarn dev # ou npm dev 

  #Deixe o server em execução
```

## :page_facing_up: Uso

A interface da aplicação pode ser acessada pelo browser no endereço [localhost:3000](http://localhost:3000)

- O botão Upar dados subirá os dados para o Banco de dados.


