
# Auth Github - React + Node express

Este projeto é uma implementação de autenticação usando as credenciais do GitHub. Ele oferece uma solução segura e eficiente para autenticar usuários em um aplicativo web.



## Funcionalidades

- Login com GitHub: Os usuários podem fazer login utilizando suas contas do GitHub, proporcionando uma maneira rápida e segura de acessar o aplicativo.


- Exemplo de Implementação: O repositório contém um exemplo completo de integração da autenticação do GitHub, tanto no lado do servidor quanto no lado do cliente (front-end).


## Stack utilizada

**Front-end:** React

**Back-end:** Node => 18.15, Express, dotenv


## Variáveis de Ambiente React

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Essa variavel VITE_CLIENT_ID é adquirida quando você cria uma nova OAuth App no github link: https://github.com/settings/developers

`VITE_CLIENT_ID`

`VITE_API_URL`


## Variáveis de Ambiente Express

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Essas variaveis são adquiridas quando você cria uma nova OAuth App no github link: https://github.com/settings/developers

`CLIENT_ID`

`CLIENT_SECRET`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/AbnerSilvaBarbosa/Auth_Github_React.git
```

Entre no diretório do projeto

```bash
  cd Auth_Github_React
```

Instale as dependências

```bash
  npm i
```

Inicie o front-end

```bash
  npm run dev
```

Inicie o back-end

```bash
  cd server
  npm i
  node index.js
```
## Como Funciona

O projeto é dividido em duas partes principais: o front-end (cliente) e o back-end (servidor). Vamos entender como cada parte funciona.

### Front-end (Cliente)
O arquivo App.js contém a lógica do front-end. Aqui estão algumas das principais funcionalidades:

- loginWithGithub(): Essa função redireciona o usuário para a página de autorização do GitHub para fazer login.

- logoutUser(): Essa função realiza o logout do usuário, removendo o token de acesso armazenado localmente.

- getAccessToken(codeParam): Essa função obtém o token de acesso usando o código retornado após a autorização do GitHub.

- getUserData(): Essa função obtém os dados do usuário autenticado a partir do token de acesso.

### Back-end (Servidor)
O arquivo server.js contém o código do servidor usando o framework Express em Node.js. Aqui estão algumas funcionalidades:

- Rota /getAccessToken: Obtém o token de acesso do GitHub usando o código de autorização recebido do front-end.

- Rota /getUserData: Obtém os dados do usuário autenticado do GitHub usando o token de acesso.
## Referência

 - [GitHub Login With React (GitHub APIs, GitHub OAuth 2.0 Authentication)](https://www.youtube.com/watch?v=rRn2EisxPl4&t=1495s)


