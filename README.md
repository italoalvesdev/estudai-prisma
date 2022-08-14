<h1 align="center">
  Estudai API
</h1>

<p align="center">
  <a href="#-stack">✨ Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">💻 Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-endpoints">📋 Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-instalação">:octocat: Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#telephone_receiver-contato">:telephone_receiver: Contato</a>
</p>

<br />

## ✨ Stack

- [ ] Express
- [ ] [Prisma](https://www.prisma.io/)
- [ ] TypeScript
- [ ] [JsonWebToken](https://jwt.io/)
- [ ] [Nodemailer](https://nodemailer.com/about/)
- [ ] [BcryptJS](https://openbase.com/js/bcryptjs/documentation)
- [ ] [Handlebars](https://handlebarsjs.com/)
- [ ] [DayJS](https://day.js.org/en/)
- [ ] [Validator](https://github.com/validatorjs/validator.js/)

## 💻 Projeto

O Estudai API é uma API Rest desenvolvida para projeto [Estudai](https://github.com/italoalvesdev/estudai-nextjs), onde aplico os seguintes princípios:

- SOLID
- Design Patterns
- Clean Architecture
- Clean Code

## 📋 Endpoints

As seguintes rotas estão configuradas:

- `/students` - POST - Cadastra o aluno no banco de dados
- `/auth` - POST - Autenticar o aluno (Login)
- `/refresh-token` - POST - Atualizar o token de acesso utilizando o token de atualização gerado no login
- `/password/forgot` - POST - Enviar um email com o link utilizado para redefinição de senha
- `/password/reset` - POST - Redefine a senha utilizando o token gerado pelo link do email enviado da rota _/password/forgot_

## :octocat: Instalação

Para clonar o repositório:

```sh
git clone https://github.com/italoalvesdev/estudai-prisma
```

Execute o seguinte comando em seu terminal para criar o banco de dados PostgreSQL e as tabelas representada no Schema: 

```sh
npx prisma migrate dev
```

Para instalar as dependências com NPM:

```sh
npm install
```

Para instalar as dependências com Yarn:

```sh
yarn install
```

Iniciar o ambiente de desenvolvimento com NPM:

```sh
npm run dev
```

Iniciar o ambiente de desenvolvimento com Yarn:

```sh
yarn dev
```

## 📝 Contato
Siga-me no Linkedin, estou sempre por lá.

![Linkedin Badge](https://img.shields.io/badge/-Italo%20Alves-6633cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/italo-alvess/)

---
Feito com ♥ by Italo Alves :wave: