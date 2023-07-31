
![Logo](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/logo2.png)


# the Contacts book API

Um projeto focado em criar uma API-REST funcional para uma agenda de contatos.

## Instalação e inicialização

Apos clonar a api siga os passos para instalaçao



## Instalação

Instale o projeto com npm

```bash
  git clone "diretorio do github"
  cd contact-book-api
  npm install
  npm run dev  
```
    
## Documentação da API

### Rotas

| Verbo http |   Rotas        | Autenticação                     | body              |
| :----------| :------------- | :------------------------------- | :---------------  |
| `POST`     | `/users`       | **Obrigatório**. token no reader | user data         |
| `GET`      | `/users`       | **Obrigatório**. token no reader | N/ necessário     |
| `PATCH`    |`/users/:id`    | **Obrigatório**. token no reader | user data         |
| `DELETE`   | `/users/:id`   | **Obrigatório**. token no reader | N/ necessário     |
| `POST`     | `/login`       | **Obrigatório**. token no reader | login data        |
| `POST`     | `/contacts`    | **Obrigatório**. token no reader | Contact data      |
| `GET`      | `/contacts`    | **Obrigatório**. token no reader | N/ necessário     |
| `PATCH`    | `/contacts/:id`| **Obrigatório**. token no reader | Contact data      |
| `DELETE`   | `/contacts/:id`| **Obrigatório**. token no reader | N/ necessário     |

### Usuarios

#### Criar um usuario

```http
  POST /users
```

##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

![corpo usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/userCreatBody.png)

Exemplo de resposta 

![resposta cria usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/userCreatresp.png)

#### lista o usuario

```http
  GET /users
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

```http
  Sem corpo na requisição
```

Exemplo de resposta 

![resposta lista usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/userCreatresp.png)

#### Atualiza um usuario

```http
  PATCH /users/:id
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

![corpo atualiza usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/updReqBod.png)

Exemplo de resposta 

![resposta atualiza usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/updReqRes.png)

#### Deleta um usuario

```http
  DELETE /users/:id
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

```http
  sem corpo na requisição
```

Exemplo de resposta 

![resposta deleçao](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/deleteResponse.png)

### login

#### Logar na aplicacao

```http
  POST /login
```
##### Autenticação

```http
  Não necessário
```

Exemplo de requisição

![corpo login](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/loginBody.png)

Exemplo de resposta 

![resposta login](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/loginResponse.png)

### Contatos

#### Criar um contato

```http
  POST /contacts
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

![corpo criar contato](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/contCreBod.png)

Exemplo de resposta 

![resposta cria contato](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/contCreRes.png)

#### lista os contatos

```http
  GET /contacts
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

```http
  Sem corpo na requisição
```

Exemplo de resposta 

![resposta lista usuario](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/listContREs.png)

#### Atualiza um contato

```http
  PATCH /contacts/:id
```
##### Autenticação

```http
  BEARER token
```

Exemplo de requisição

![corpo atualiza contato](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/updConBod.png)

##### Autenticação

```http
  BEARER token
```
Exemplo de resposta 

![resposta atualiza contato](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/updConres.png)

#### Deleta um contato

```http
  DELETE /contacts/:id
```
##### Autenticação

```http
  BEARER token
```
Exemplo de requisição

```http
  sem corpo na requisição
```

Exemplo de resposta 

![resposta deleçao](https://github.com/grupo-projeto-final-m5/api_images/blob/main/img/apiContatos/deleteResponse.png)


## FRONT-END

ACESSE O LINK E BAIXE O REPOSITORIO FRONT END PARA UMA EXPERIENCIA MAIS COMPLETA

- [REPOSITORIO FRONT-END](https://github.com/wellinton-eugenio/contact-book)

## Autores

- [@wellingtonEugenio](https://www.github.com/wellinton-eugenio)


## Aprendizados

uma Revisao nos conceitos de API-REST usando o EXPRESS, TYPESCRIPT, POSTGRESQL.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://wellington-portifolio.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wellington-depaula)



## Stack utilizada

**Back-end:** Node, Express, typescrypt, postgreSQL
