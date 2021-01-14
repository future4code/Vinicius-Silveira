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