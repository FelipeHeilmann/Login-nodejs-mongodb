# API de Login 

Esta é uma API de login que permite o cadastro de usuários e autenticação utilizando JSON Web Token (JWT).

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o [Node.js](https://nodejs.org/) em sua máquina.

## Configuração

Para configurar a API e rodar o servidor, siga os passos abaixo:

1. Clone o repositório do projeto para o seu ambiente local.

2. Navegue até a pasta  do projeto:

3. Instale as dependências da API utilizando o gerenciador de pacotes npm ou yarn. Digite o seguinte comando no terminal:
`npm install` ou `yarn install`

4. Com as dependências instaladas, é necessário configurar as variáveis de ambiente para o funcionamento da API. Crie um arquivo chamado ".env" na raiz do projeto" e adicione as seguintes linhas:

Substitua as configurações acima pelas suas informações específicas.

- `PORT`: A porta em que o servidor da API será executado localmente (por exemplo, 3000).
- `MONGO_URI`: A URL de conexão fornecida pelo MongoDB Atlas ou pelo seu servidor MongoDB local.
- `SECRET`: Uma chave secreta para a geração do JSON Web Token (JWT) para autenticação.

5. Com as dependências instaladas e as variáveis de ambiente configuradas, você está pronto para rodar o servidor da API. Utilize o seguinte comando:
`npm run dev` ou `yarn run dev`


A API estará em execução e pronta para receber requisições de cadastro de usuários e autenticação.

## Endpoints

A API possui os seguintes endpoints:

### Cadastro de Usuários

POST /auth/register

Endpoint para cadastrar um novo usuário na base de dados. Os dados do usuário devem ser enviados no corpo da requisição em formato JSON, com os campos "name", "email" e "password".

Exemplo de requisição:

```json
{
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "password": "senha123"
}
```

POST /auth/login

Endpoint para autenticar um usuário. Os dados de login devem ser enviados no corpo da requisição em formato JSON, com os campos "email" e "password".

Exemplo de requisição:

```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```
GET /user/:id

Endpoint para pegar dados de um usuário. Essa rota é protegida, então precisa do token enviado no header da requisição.

## Proteção de Rotas
As rotas que exigem autenticação devem incluir o token JWT no cabeçalho da requisição com a chave "Authorization". O valor deve ser do tipo "Bearer" seguido do token.

Exemplo de cabeçalho:

Authorization: Bearer seu_token_jwt

## Contribuição
Se você quiser contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas na página do repositório no GitHub.

Esperamos que esta API seja útil e que possa ajudá-lo a implementar a funcionalidade de login e autenticação em seus projetos.

