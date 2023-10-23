#SMDe-commerce:

## Iniciando o projeto:

Para roda o projeto execute:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

O esquema de banco de dados pode ser visto abaixo:

![Untitled (1)](https://github.com/Johnvasc/SMDe-commerce/assets/39773960/67725c81-b618-47eb-b309-ce1377ab86b0)

Execute os comandos SQL para criar alguns elementos úteis:

```
CREATE TABLE users(
  ID PRIMARY KEY,
  Name varchar,
  Login varchar,  
  Email varchar,
  Address varchar,
  Password varchar,
  Administrator boolean,
  Created_at date
)
```

```
INSERT INTO users
VALUES (1, 'Admin', 'Admin', 'Admin@email.com', 'Rua xyz', 'admin123', false, '2023-10-15')
```
obs: as colunas começam com letras maiúsculas, assim na hora de fazer uma pesquisa, seu nome deve vir entre aspas:
Não funciona: SELECT Name FROM users
Sim, funcion: SELECT "Name" FROM users

## API:

A API do projeto deve ser iniciada em outra instancia usando o comando `node server.js`
