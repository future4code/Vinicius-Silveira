# Banco de dados SQL com Typescript

### Exercício 1
a) Uma chave estrangeira é o elo de ligação entre uma tabela e outra, é ela que referencia a qual dado está conectada.

b) Query para criar tabela "Rating".
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
```
Query para inserir dados na tabela.
```
INSERT
INTO Rating
VALUES 
	('1','Filme muito bom, ótimas atuações',7,'001'),
    ('2','Grande obra nacional',10,'002'),
    ('3','Clássica pornochanchada brasileira',8,'003'),
    ('4','Dadinho é o caralho, agora é Zé Pequeno',10,'004'),
    ('5','Rodrigo Santoro incorpora Lady Di',8.4,'005'),
    ('6','Maluco malandro dá bolo nos bandidos',7.2,'006');
```
c) Erro 1452. Não foi possível adicionar ou atualizar um dado numa tabela referência, pois não foi encontrada a chave.
```
INSERT
INTO Rating
VALUES 
	('7','Filme muito bom, ótimas atuações',7,'008');
```

d) Deletar coluna Rating(avaliacao) da tabela filmes.
```
ALTER TABLE Filmes DROP COLUMN avaliacao;
```
e) Erro 1451. Não foi possível deletar devido a foreign key constraint que o dado possuí, ele está linkado na tabela Rating e antes teríamos que deletar esse dado na tabela Rating ou alterar sua referência para logo após deletar na tabela filmes.
```

```

### Exercício 2
a) É uma tabela que irá fazer referência entre atores e filmes, onde um filme pode referenciar a vários atores e um ator pode referenciar a vários filmes, uma referência N:M.

b) Criar 6 relações.
```
INSERT
INTO MovieCast
VALUES
	('001','001'),
    ('001','003'),
    ('004','004'),
    ('003','002'),
    ('002','006'),
    ('005','005'),
    ('006','006');
```
c) Erro 1452 ao tentar criar uma relação com um filme ou ator inexistente, pois não consegue localizar a id na tabela referência.
```
INSERT
INTO MovieCast
VALUES
    ('006','016');
```
d) Erro 1451, o mesmo erro que acontece no exercício 1e, que não podemos deletar um dado que está sendo referenciado em outra tabela.

### Exercício 3

a) A query junta as informações das duas tabelas para termos uma visualização melhor dos dados que foram referenciados. O operador "ON" é que faz a comparação entre as id likadas.

b) Mostrar id nome e rate dos filmes já avaliados.
```
SELECT Filmes.id,Filmes.nome,Rating.rate FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.movie_id
WHERE Rating.rate IS NOT NULL;
```

### Exercício 4
a) Retorne todos filmes e suas avaliações.
```
SELECT Filmes.id, Filmes.nome,Rating.rate,Rating.comment FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id;
```
b) Retornar informações de elenco.
```
SELECT Filmes.id,Filmes.nome,MovieCast.actor_id FROM Filmes
RIGHT JOIN MovieCast ON MovieCast.movie_id = Filmes.id;
```
c) Média dos filmes agrupadas em relação aos filmes.
```
SELECT AVG(Rating.rate),Filmes.id,Filmes.nome FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id
GROUP BY Filmes.id;
```
### Exercício 5
a) Usamos dois "JOIN", pois a tabela MovieCast se relaciona com outras duas tabelas havendo a necessidade da chamada dessas tabelas para a visualização de todos dados.

b) Retornar id e título do filme e id e nome do ator.
```
SELECT Filmes.id as movie_id, Filmes.nome, Actor.id as actor_id, Actor.name FROM Filmes
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```
c) Na query passada não percebi nenhum diferença da query da questão anterior.

d) Retorna todos os filmes com o nome de seus atores e as suas avaliacoes.
```
SELECT Filmes.id as movie_id, Filmes.nome, Actor.id as actor_id, Actor.name, Rating.rate, Rating.comment FROM Filmes
LEFT JOIN MovieCast ON Filmes.id = MovieCast.movie_id
LEFT JOIN Rating ON Rating.movie_id = Filmes.id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

### Exercício 6
a) Relação do tipo N:M

b) Criar tabela. Criei primeiro uma tabela para receber o nome dos Oscars e depois outra tabela para fazer a relação dos filmes com o Oscar.

* Tabela Oscar
```
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
```
* Tabela MovieOscar
```

CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
    oscar_id VARCHAR(255),
    date_oscar DATE,
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
```
c) Populando a tabela MovieCast.
```
INSERT
INTO MovieOscar
VALUES
	('001','002','2003-02-20'),
    ('005','008','2003-02-20'),    
    ('003','008','2007-02-20'),
    ('003','005','2007-02-20'),
    ('006','006','2007-02-20'),
    ('006','009','2007-02-20'),
    ('002','006','2007-02-20'),
    ('002','003','2007-02-20');
```
d) Retorna todos os filmes com seus respectivos Oscar.
```
SELECT 
Filmes.id as movie_id, 
Filmes.nome, 
Oscar.id as oscar_id,
Oscar.name,
MovieOscar.date_oscar
FROM Filmes
LEFT JOIN MovieOscar ON Filmes.id = MovieOscar.movie_id
JOIN Oscar ON Oscar.id = MovieOscar.oscar_id;
```