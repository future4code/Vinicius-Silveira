# Serviços no Backend

### Exercício 1

a) Código criado nos arquivos /services/addressManager e chamado no endpoint /endpoints/getAddressInfo

### Exercício 2

a) Query utilizada para criação da tabela de endereços, foi utilizada uma "FOREIGN KEY" para linkar as tabelas de usuário e endereços.
```sql
CREATE TABLE User_Address(
	id VARCHAR(255) PRIMARY KEY,
    local VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    complement VARCHAR(100),
    zipcode VARCHAR(10),
    city VARCHAR(255) NOT NULL,
    state VARCHAR (255) NOT NULL,
    user_id VARCHAR (255),
    FOREIGN KEY (user_id) REFERENCES aula50_User(id)
    );
```


### Exercício 3

a) Foi feita a refatoração no arquivo /endpoints/signup, onde é feita a inserção dos dados tanto na tabela de usuário, quanto na tabela de endereços. Para isso foi criada a função createAddress para inserir os dados na tabela de endereços.