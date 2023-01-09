# Teste-Técnico-Sharenergy

Projeto fullstack realizado em Node.js com o framework express,banco de dados não relacional MongoDB e React com Typescript. Esse teste técnico tem o intuito de criar usuários que podem criar diversos clientes vinculados a eles, ou seja, uma agenda eletrônica, no web site possuem outras páginas que tem o intuito de mostrar como se acessar uma API.

## Link do Vídeo do YouTube

https://youtu.be/2YMatz-XXtc

## Como Rodar a Aplicação

**Vale pontuar que o NODE deve estar instalado na máquina**

_O gerenciador de arquivos usado foi o yarn mais pode ser usado o npm_

### Início

Realizar o clone do repositório. Na pasta raiz executar os seguintes comandos:

Para inicializar o Backend:

```shell
  cd Backend
```

```shell
  yarn
```

criar um arquivo .env com os paramêtros de banco de dados e URL do MONGO.

```shell
  // A URL deve ser modificada com a senha e usuário respectivamente
  // Exemplo de Url : mongodb+srv://<USUÁRIO>:<SENHA>@api.l32ftzc.mongodb.net/?retryWrites=true&w=majority

  MONGO_URL=

  JWT_SECRET=

  // caso a porta seja modificada e não seja p valor padrão de 8080, deve-se mudar a URL no parametro proxy no arquivo packege.json

  PORT=8080

  ADM_PASSWORD='sh@r3n3rgy'
```

Abrir o servidor

```shell
  yarn dev
```

O usuário ADM padrão é:

```shell
  username = desafiosharenergy
  senha = ADM_PASSWORD ou 123456 quando não aplicado no arquivo .env
```

Com o servidor do backend funcionado, deve-se abrir um novo terminal na raiz do projeto e executar os seguintes comandos, para inicializar o frontend:

```shell
  cd Frontend
```

```shell
  yarn
```

Para inicializar o Frontend:

criar um arquivo .env com os paramêtros de criptografia e porta.

```shell

  SECRET_KEY=

  // caso a porta seja modificada e não seja p valor padrão de 8080, deve-se mudar a URL no parametro proxy no arquivo packege.json
  PORT_BACK=8080

```

```shell
  yarn start
```

## TESTES

### Testes Backend

**EM DESENVOLVIMENTO**

### Testes Frontend

**EM DESENVOLVIMENTO**

## Endpoints - API

## 1. **Users**

O objeto User é definido como:

| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| \_id      | string  | Identificador único do usuário               |
| username  | string  | O username do usuário.                       |
| fullname  | string  | O nome completo do usuário.                  |
| phone     | boolean | O telefone do usuário.                       |
| email     | objeto  | O e-mail do usuário.                         |
| password  | string  | A senha de acesso do usuário                 |
| createdOn | Date    | Indica data de criação do usuário            |
| updatedOn | Date    | Indica data de última atualização do usuário |
| clients   | Array   | Todos os contatos vinculados a esse usuário  |

### Endpoints

| Método | Rota       | Descrição                                 |
| ------ | ---------- | ----------------------------------------- |
| POST   | /users     | Criação de um usuário.                    |
| GET    | /users     | Lista todos os usuários - apenas o ADM    |
| GET    | /users/:id | Lista o próprio usuário                   |
| DELETE | /users/:id | Deleta o usuário                          |
| PATCH  | /users/:id | Atualiza campos do usuário passado por ID |

---

### 1.1. **Criação de Usuário**

### `/users`

### Exemplo de Request:

```
POST /users
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "username": "Wyller",
  "fullname": "Wyller Fernandes",
  "phone": "41999999999",
  "email": "wyller@wyller.com",
  "password": "123456"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "username": "Wyller",
  "fullname": "Wyller Fernandes",
  "email": "wyller@wyller.com",
  "phone": "41999999999",
  "isAdm": false,
  "createdOn": "2023-01-06T11:54:43.783Z",
  "updatedOn": "2023-01-06T11:54:43.783Z",
  "clients": [],
  "_id": "63b80c03c811ec448228f6f5"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 400 Conflict   | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Authorization: Token e ser Administrador
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "_id": "63b72c45eb4462cc5de74062",
    "username": "desafiosharenergy",
    "fullname": "Usuário Administrador",
    "email": "root@root.com",
    "phone": "41999999999",
    "isAdm": true,
    "createdOn": "2023-01-05T20:00:05.186Z",
    "updatedOn": "2023-01-05T20:00:05.186Z",
    "clients": []
  },
  {
    "_id": "63b80c03c811ec448228f6f5",
    "username": "Wyller",
    "fullname": "Wyller Fernandes",
    "email": "wyller@wyller.com",
    "phone": "41999999999",
    "isAdm": false,
    "createdOn": "2023-01-06T11:54:43.783Z",
    "updatedOn": "2023-01-06T11:54:43.783Z",
    "clients": []
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

ou

```JSON
{
	"message": "You're not the ADM"
}
```

Pode-se listar através do ID do Usuário
GET /users/9cda28c9-e540-4b2c-bf0c-c90006d37893

---

### 1.3. **Atualizar um Usuário por ID**

### `/users/:id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e usuário dono
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "username": "Wyllerr",
  "fullname": "Wyller Fernandess",
  "email": "wyller2@wyller.com",
  "phone": "419999999992"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated",
  "userdata": {
    "_id": "63b72c54eb4462cc5de74067",
    "username": "Wyllerr",
    "fullname": "Wyller Fernandess",
    "email": "wyller2@wyller.com",
    "phone": "41999999992",
    "isAdm": false,
    "createdOn": "2023-01-05T20:00:20.519Z",
    "updatedOn": "2023-01-05T20:01:26.902Z",
    "clients": []
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar um Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:

```
DELETE /users/63b80c03c811ec448228f6f5
Authorization: Token e ser o dono do usuário
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Usuário deletado com sucesso!"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição           |
| --------------- | ------------------- |
| 409 Conflict    | User not found.     |
| 400 Bad Request | Usuário já deletado |

---

## 2. **Login**

### 2.1. **Login do Usuário**

### `/login`

### Exemplo de Request:

```
POST /login
Authorization: None
```

### Corpo da Requisição:

```json
{
  "username": "Wyller",
  "password": "123456"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjg1MjQ2YjQyNThmMjRhYTY1YWRjYyIsImlzQWRtIjp0cnVlLCJpYXQiOjE2NzMwMjQwNzQsImV4cCI6MTY3MzExMDQ3NH0.rJHb_bD3z9OSFfjIhxzuy6-0EwIj9hUjevT7lRTgExA"
}
```

### Possíveis Erros:

| Código do Erro | Descrição           |
| -------------- | ------------------- |
| 403 Forbidden  | Invalid Credentials |

---

### 1.1. **Criação de um Cliente**

### `/clients`

### Exemplo de Request:

```
POST /clients
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "name": "Jose",
  "address": "Rua josé da silva, 5",
  "phone": "41999999999",
  "email": "Jose@jose.com",
  "cpf": "014025038-34"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "Jose",
  "email": "Jose@jose.com",
  "phone": "41999999999",
  "address": "Rua josé da silva, 5",
  "cpf": "014025038-34",
  "createdOn": "Fri Jan 06 2023 08:58:27 GMT-0300 (Horário Padrão de Brasília)",
  "updatedOn": "Fri Jan 06 2023 08:58:27 GMT-0300 (Horário Padrão de Brasília)",
  "userId": "63b72c45eb4462cc5de74062",
  "_id": "63b80ce3c811ec4482291a6c",
  "__v": 0
}
```

### 1.2. **Listando Clientes do Usuário**

### `/clients`

### Exemplo de Request:

```
GET /clients
Authorization: Token
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "_id": "63b80ce3c811ec4482291a6c",
    "name": "Jose",
    "email": "Jose@jose.com",
    "phone": "41999999999",
    "address": "Rua josé da silva, 5",
    "cpf": "014025038-34",
    "createdOn": "Fri Jan 06 2023 08:58:27 GMT-0300 (Horário Padrão de Brasília)",
    "updatedOn": "Fri Jan 06 2023 08:58:27 GMT-0300 (Horário Padrão de Brasília)",
    "userId": "63b72c45eb4462cc5de74062",
    "__v": 0
  },
  {
    "_id": "63b80ce6c811ec4482291b02",
    "name": "Maria",
    "email": "Maria@Maria.com",
    "phone": "41999999999",
    "address": "Rua josé da silva, 5",
    "cpf": "014025038-24",
    "createdOn": "Fri Jan 06 2023 08:58:30 GMT-0300 (Horário Padrão de Brasília)",
    "updatedOn": "Fri Jan 06 2023 08:58:30 GMT-0300 (Horário Padrão de Brasília)",
    "userId": "63b72c45eb4462cc5de74062",
    "__v": 0
  },
  {
    "_id": "63b80ceac811ec4482291bc0",
    "name": "Bruxa",
    "email": "Bruxa@Bruxa.com",
    "phone": "41999999999",
    "address": "Rua casa da bruxa",
    "cpf": "014025038-14",
    "createdOn": "Fri Jan 06 2023 08:58:34 GMT-0300 (Horário Padrão de Brasília)",
    "updatedOn": "Fri Jan 06 2023 08:58:34 GMT-0300 (Horário Padrão de Brasília)",
    "userId": "63b72c45eb4462cc5de74062",
    "__v": 0
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

Pode-se listar através do ID do Cliente
GET /clients/63b80ceac811ec4482291bc0

---

### 1.3. **Atualizar um Clientes por ID**

### `/clients/:id`

### Exemplo de Request:

```
PATCH /clients/63b80ce3c811ec4482291a6c
Authorization: Token e usuário dono do contato
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| id        | string | Identificador único do contato (Contact) |

### Corpo da Requisição:

```json
{
  "name": "Jose na Bruxa",
  "phone": "12312312",
  "email": "Jose@Bruxa.com",
  "address": "Casa da bruxa"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Client updated",
  "userdata": {
    "_id": "63b80ce3c811ec4482291a6c",
    "name": "Jose na Bruxa",
    "email": "Jose@Bruxa.com",
    "phone": "12312312",
    "address": "Casa da bruxa",
    "cpf": "014025038-34",
    "createdOn": "Fri Jan 06 2023 08:58:27 GMT-0300 (Horário Padrão de Brasília)",
    "updatedOn": "Fri Jan 06 2023 08:59:23 GMT-0300 (Horário Padrão de Brasília)",
    "userId": "63b72c45eb4462cc5de74062",
    "__v": 0
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar um Cliente por ID**

### `/clients/:id`

### Exemplo de Request:

```
DELETE /clients/63b80ce3c811ec4482291a6c
Authorization: Token e ser o dono do contato
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| id        | string | Identificador único do contato (Contact) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Conflict   | User not found. |
