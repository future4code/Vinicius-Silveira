# Introdução a Autenticação

### Exercício 1

a) Concordo que strings sejam melhores para armazenar ids que números, pois nos abre um leque de combinações possíveis, tornando o identificador único.

b) Código no arquivo.

### Exercício 2

a) O código cria a conexão com o banco de dados usando o knex, e cria uma função chamada createUser a qual nos permite criar um usuário com id, email e senha na tabela "User".

b) Query usada para criar a tabela User, a qual chamei de aula50_User, pois já havia uma outra tabela User usada em outros exercícios e não tinha a necessidade de alterá-la.
```sql
CREATE TABLE aula50_User(
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);
```
c) código no arquivo.

### Exercício 3

a) Ele define como string o valor vindo do process.env.JWT_KEY.

b) Código no arquivo authentication/authenticator

### Exercício 4
a) Código no arquivo /endpoints/signup

b) Código no arquivo /endpoints/signup

c) Código no arquivo /endpoints/signup

### Exercício 5

a) Código no arquivo /data/getUserByEmail

### Exercício 6

a) Código no arquivo /endpoints/login

### Exercício 7 

a) 

b) Código no arquivo /middleware/authenticator

### Exercício 8

a) Código no arquivo /data/getUserById

b) Código no arquivo /endpoints/selectUserById