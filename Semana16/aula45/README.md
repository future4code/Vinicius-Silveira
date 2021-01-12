# Banco de Dados de um Cinema

Nesse projeto será criado um banco de dados contendo uma tabela com dados básicos sobre atores, seguindo uma lista de exercícios passada no notion da turma Dumont.

### Exercício 1

Hoje foi visto que podemos alterar as regras definidas por uma tabela, com o comando abaixo é possível adicionar o sorvete favorito na tabela "Actor".
```
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
```
Com o próximo comando é adicionada a coluna "type" com o valor "NotDirector" como padrão.
```
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```
a) O comando abaixo remove a coluna "salary" da tabela "Actor".
```
ALTER TABLE Actor DROP COLUMN salary;
```
b) O comando abaixo altera a coluna "gender" para "sex" como string de no máximo 6 caracteres.
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c) O comando abaixo altera a coluna "gender" para "gender" como string de no máximo 255 caracteres.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d) Alterando a coluna "gender" da tabela "Actor" para string que aceite 100 caracteres.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
### Exercício 2

a) Atualizar o nome e a data de nascimento do ator com id "003".
```
UPDATE Actor
SET name = "Débora Falabella",birth_date = "1979-02-22"
WHERE id="003";
```
b) Alterar o nome de Juliana Paes para Juliana Pães e depois desfazer.
```
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "Juliana Pães";
```
c) Atualizar todas as informações com o id "005".
```
UPDATE Actor
SET 
	name = "Paola Oliveira",
    salary=650000.35,
    birth_date="1982-04-14",
    gender="female",
    favorite_ice_cream_flavor="caju",
    type="NotDirector"
WHERE id="005";
```
d) Ao tentar atualizar a tabela com um dado inexistente o erro retornado foi o "1054" Unknown column idade in field list, isso aconteceu pois não foi encontrado esse campo na tabela.
```
UPDATE Actor
SET idade=30
WHERE id="006";
```

### Exercício 3

a) Deletar a atriz "Fernanda Montenegro".
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b) Deletar todos atores do gênero "male" com salário maior que R$1.000.000,00.
```
DELETE FROm Actor WHERE(gender="male" AND salary>1000000);
```
### Exercício 4
a) Maior salário de todos atores e atrizes.
```
SELECT MAX(salary) FROM Actor;
```
b) Menor salário das atrizes.
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```
c) Quantidade de atrizes.
```
SELECT COUNT(*) FROM Actor WHERE gender="female";
```
d) Soma de todos salários.
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) A query abaixo nos retorna quantos dados temos por campo "gender", no caso da nossa tabela, temos 2 gender, então retorna 2 grupos com a quantidade de dados em cada "gender".
```
SELECT COUNT(*),gender
FROM Actor
GROUP BY gender;
```
b) Retorna id e nome em ordem alfabética.
```
SELECT id,name FROM Actor ORDER BY name ASC;
```
c) Retorna todos atores ordenados pelo salário.
```
SELECT * FROM Actor ORDER BY salary ASC;
```
d) Retorna todos atores com os 3 maiores salários.
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e) Retorne a média de salário por gênero.
```
SELECT AVG(salary),gender FROM Actor GROUP BY gender;
```
### Exercício 6
a) Adicionando o parâmetro "playing_limit_date" na tabela "Filmes".
```
ALTER TABLE Filmes ADD playing_limit_date DATE;
```
b) Alterar o parâmetro "avaliacao" para receber FLOAT.
```
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```
c) Atualizar dois filmes para um estar em cartaz e outro não.
```
UPDATE Filmes
SET playing_limit_date="2021-02-12"
WHERE id="001";

UPDATE Filmes
SET playing_limit_date="2020-02-12"
WHERE id="002";
```
d) Após deletar um filme e tentar atualizar a sinopse da id deletada, o comando é executado, porém nada é alterado pois não encontrou nenhuma id com o valor passado.
```
DELETE FROM Filmes WHERE id="004";

UPDATE Filmes
SET sinopse="blá blá blá"
WHERE id="004";
```
### Exercício 7
a) Filmes com avaliação maior que 7.5.
```
SELECT COUNT(*) FROM Filmes WHERE avaliacao >7.5;
```
b) Média das avaliações dos filmes.
```
SELECT AVG(avaliacao) FROM Filmes;
```
c) Quantidade de filmes em cartaz.
```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();
```
d) Quantidade de filmes que ainda irão lançar.
```
SELECT COUNT(*) FROM Filmes WHERE data_lancamento > CURDATE();
```
e) Maior nota dos filmes.
```
SELECT MAX(avaliacao) FROM Filmes;
```
f) Menor nota dos filmes.
```
SELECT MIN(avaliacao) FROM Filmes;
```

### Exercício 8
a) Todos os filmes em ordem alfabética.
```
SELECT * FROM Filmes ORDER BY nome ASC;
```
b) 5 primeiros filmes em ordem decresente.
```
SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5.
```
c) 3 filmes mais recentes em cartaz.
```
SELECT * FROM Filmes WHERE (data_lancamento < CURDATE()) ORDER BY data_lancamento DESC LIMIT 3;
```
d) 3 filmes melhor avaliados.
```
SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3;
```