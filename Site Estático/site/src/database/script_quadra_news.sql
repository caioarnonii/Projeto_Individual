	-- Criação e utilização do Banco

	create database QuadraNews;
	use QuadraNews;

	-- Criação das Tabelas

	create table Usuario (
	idUsuario int primary key auto_increment,
	Nome varchar (45),
	Email varchar (45),
	check (Email like '%@%'),
	Senha varchar (45)
	);

	create table Jogador (
	idJogador int primary key auto_increment,
	NomeJogador varchar (45)
	);

	create table UsuarioJogador (
	idVotos int,
	fkUsuario int,
	fkJogador int,
	foreign key (fkUsuario) references Usuario (idUsuario),
	foreign key (fkJogador) references Jogador (idJogador),
	primary key (idVotos , fkUsuario , fkJogador)
	);

	create table Partidas_Jogador (
	idPartida int,
	fkJogador int,
	Pontos_Partida int,
	Assistencias_Partida int,
	Rebotes_Partida int,
	foreign key (fkJogador) references Jogador (idJogador),
	primary key (fkJogador , idPartida)
	);

	-- Inserção de Dados nas Tabelas

	insert into Usuario values 
	(null , 'Caio' , 'caio@gmail.com' , '123'),
	(null , 'Edu' , 'edu@gmail.com' , '321'),
	(null , 'Bruno' , 'bruno@gmail.com' , '1234');


	insert into Jogador values 
	(null , 'LeBron James'),
	(null , 'Stephen Curry'),
	(null , 'Giannis Antetokounmpo');

	insert into Partidas_Jogador values 
	(1 , 1 , 36 , 6 , 6),
	(2 , 1 , 16 , 6 , 6),
	(3 , 1 , 33 , 7 , 8),
	(4 , 1 , 37 , 6 , 5),
	(5 , 1 , 18 , 11 , 10);

	-- Consultando os valores nas tabelas

	select * from Usuario;

	select * from Jogador;

	select * from Partidas_Jogador;

	select * from Jogador join Partidas_Jogador on fkJogador = idJogador;


	-- Select's das KPI's

	-- Lebron James 
	select avg(Pontos_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 1;

	select avg(Assistencias_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 1;

	select avg(Rebotes_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 1;



	-- Stephen Curry 
	select avg(Pontos_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 2;

	select avg(Assistencias_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 2;

	select avg(Rebotes_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 2;



	-- Giannis Antetokounmpo 
	select avg(Pontos_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 3;

	select avg(Assistencias_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 3;

	select avg(Rebotes_Partida) from Partidas_Jogador join Jogador on fkJogador = idJogador and idJogador = 3;




