# Tabela de Atores

Nesse projeto será criado um banco de dados contendo uma tabela com dados básicos sobre atores, seguindo uma lista de exercícios passada no notion da turma Dumont.

### Exercício 1
```
CREATE TABLE Actor (
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
a) A query CREATE TABLE Actor, cria uma tabela chamada Actor com os seguintes campos, id, name, salary, birth_date e gender. A id é declarada como uma string de 255 caracteres sendo a chave primaria de nossa tabela, já o name também declarada como string de 255 caracteres não podendo ser nula. Com a coluna salary nós temos um número do tipo FLOAT, que pode receber valores com casas decimais e também não pode ser nulo, enquanto que birth_date é do tipo data não nulo e por fim temos o gender que é uma string de no máximo 6 caracteres para receber MALE ou FEMALE.

b)Os comandos : 
```
SHOW DATABASES
SHOW TABLES
```
como o próprio nome diz, uma nos mostra os bancos de dados e a outra nos mostra as tabelas que temos no banco de dados usado.

c) O comando :
```
DESCRIBE Actor
```
Dá uma descrição da tabela, com todos os campos e seus respectivos formatos

### Exercício 2

a) Query para adicionar a atriz Glória Pires.
```
INSERT INTO Actor (id,name,salary,birth_date,gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) Ao tentar adicionar outro elemento com uma id já criada é retornado o erro <strong>1062</strong>, que diz a entrada é duplicada para uma chave primária. Como o próprio erro diz é impossível criar uma chave primária duplicada.

c) Nesta query tentamos adicionar alguns dados e o erro retornado foi o <strong>1136</strong>. Este erro é gerado pois na instrução passada para o SQL foram de 5 campos e na linha INSERT foram passados apenas 3, o certo seria :

```
INSERT INTO Actor (id, name, salary,birth_date,gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Aqui temos um problema semelhante, pois não estamos passando o campo name na query, o correto segue abaixo:

```
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Por fim, esta última query está com o erro na data, foi passado um valor inválido, query corrigida:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) Os atores já foram criados ao corrigir as querys acima.

### Exercício 3

a) Retorna todas atrizes.
```
SELECT * FROM Actor WHERE gender="female";
```

b) Retorna salário do ator Tony Ramos
```
SELECT salary FROM Actor WHERE name="Tony Ramos";
```
c) Todas informações com gender "invalid";
```
SELECT * FROM Actor WHERE gender = "invalid";
```
Retorna zero informações pois o campo gender está armazenando male e female.

d) Retorna id,nome e salário de todos até o salário máximo de R$500.000.
```
SELECT id,name,salary FROM Actor where salary<500000;
```
e) O erro está na escrita da query, onde tenta-se passar o campo "nome" sendo que foi criado como "name".

```
SELECT id, name from Actor WHERE id = "002"
```
### Exercício 4

a) A query irá selecionar todos atores que o nome comece com A ou J e o salário seja maior que R$300.000.
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

b)