# Banco de Dados de um Cinema

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
SELECT id, name from Actor WHERE id = "002";
```
### Exercício 4

a) A query irá selecionar todos atores que o nome comece com A ou J e o salário seja maior que R$300.000.
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

b) Query que não comecem com a letra "A" e o salário maior que R$350.000.
```
SELECT * FROM Actor
WHERE !(name LIKE "A%") AND salary > 350000;
```

c) Query com atores que possuam "G" ou "g" no nome.
```
SELECT * FROM Actor
WHERE (name LIKE "%G%");
```

d) Query com atores que possuam "a" ou "A" ou "g" ou "G" no nome e salário entre R$350.000 e R$900.000
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%A%") And (salary BETWEEN 350000 AND 900000);
```

### Exercício 5

a) Criando tabela de filmes:
```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao TINYINT NOT NULL
);
```
b) Adicionando Filmes:
```
INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
	"001",
    "Se eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
c) Adicionando Filmes:
```
INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```
d) Adicionando Filmes:
```
INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e) Adicionando Filmes:
```
INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
	"004",
    "Cidade de Deus",
    "Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.",
    "2002-08-30",
    10
);
```

### Exercício 6

a) Retornar id,nome e avaliação a partir do id.
```
SELECT id,nome,avaliacao FROM Filmes WHERE id="001";
```
b) Retornar um filme a partir de um nome específico.
```
SELECT * FROM Filmes WHERE (nome LIKE "%dona%");
```
c) Retorne o id, título e sinopse dos filmes com a valiação mínima de 7.
```
SELECT id,nome,sinopse FROM Filmes WHERE (avaliacao>=7);
```

### Exercício 7
a) Retornar um filme cujo título contenha a palvra "vida".
```
SELECT * FROM Filmes WHERE (nome LIKE "%vida%");
```
b) Pesquisa de um filme que contenha o texto no título ou sinopse.
```
SELECT * FROM Filmes WHERE (nome LIKE "%vida%" OR sinopse LIKE "%jovem%");
```
c) Todos filmes já lançados.
```
SELECT * FROM Filmes;
```
d) Pesquisa de um filme que contenha o texto no título ou sinopse e avaliação maior do que 7.
```
SELECT * FROM Filmes WHERE (nome LIKE "%vida%" OR sinopse LIKE "%dona%") AND (avaliacao > 7);
```