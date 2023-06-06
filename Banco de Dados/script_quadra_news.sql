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
	idVotos int auto_increment,
	fkUsuario int,
	fkJogador int,
	foreign key (fkUsuario) references Usuario (idUsuario),
	foreign key (fkJogador) references Jogador (idJogador),
	primary key (idVotos , fkUsuario , fkJogador)
	);
    
    insert into UsuarioJogador (fkUsuario , fkJogador) values 
    (1 , 1),
    (1 , 1),
    (1 , 1),
    (1 , 1),
    (1 , 1);
    
    select * from UsuarioJogador;
    select count(fkJogador) FROM UsuarioJogador group by fkJogador;
    
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
    -- Lebron James:
	(1 , 1 , 36 , 6 , 6),
	(2 , 1 , 16 , 6 , 6),
	(3 , 1 , 33 , 7 , 8),
	(4 , 1 , 37 , 6 , 5),
	(5 , 1 , 18 , 11 , 10),
	(6 , 1 , 18 , 6 , 10),
	(7 , 1 , 25 , 4 , 8),
	(8 , 1 , 19 , 3 , 8),
	(9 , 1 , 26 , 3 , 8),
	(10 , 1 , 13 , 8 , 9),
	(11 , 1 , 21 , 6 , 6),
	(12 , 1 , 38 , 3 , 7),
	(13 , 1 , 27 , 6 , 9),
	(14 , 1 , 26 , 7 , 7),
	(15 , 1 , 28 , 11 , 10),
	(16 , 1 , 41 , 8 , 9),
	(17 , 1 , 20 , 11 , 9),
	(18 , 1 , 46 , 7 , 8),
	(19 , 1 , 37 , 4 , 11),
	(20 , 1 , 23 , 6 , 9),
	(21 , 1 , 32 , 9 , 8),
	(22 , 1 , 48 , 9 , 8),
	(23 , 1 , 35 , 10 , 8),
	(24 , 1 , 24 , 9 , 16),
	(25 , 1 , 37 , 7 , 8),
	(26 , 1 , 25 , 10 , 7),
	(27 , 1 , 43 , 6 , 11),
	(28 , 1 , 47 , 9 , 10),
	(29 , 1 , 27 , 6 , 9),
	(30 , 1 , 28 , 5 , 7),
	(31 , 1 , 38 , 5 , 6),
	(32 , 1 , 34 , 8 , 2),
	(33 , 1 , 31 , 11 , 6),
	(34 , 1 , 33 , 9 , 7),
	(35 , 1 , 30 , 4 , 9),
	(36 , 1 , 33 , 9 , 9),
	(37 , 1 , 35 , 5 , 5),
	(38 , 1 , 23 , 6 , 4),
	(39 , 1 , 21 , 4 , 17),
	(40 , 1 , 29 , 6 , 8),
	(41 , 1 , 28 , 11 , 8),
	(42 , 1 , 31 , 8 , 7),
	(43 , 1 , 21 , 3 , 7),
	(44 , 1 , 39 , 3 , 11),
	(45 , 1 , 21 , 5 , 8),
	(46 , 1 , 30 , 5 , 8),
	(47 , 1 , 27 , 4 , 7),
	(48 , 1 , 17 , 8 , 10),
	(49 , 1 , 20 , 8 , 10),
	(50 , 1 , 26 , 8 , 6);
	
    
    -- Stephen Curry:
    
    
    
    -- Giannis Antetokoumnpo:
    
    

	-- Consultando os valores nas tabelas

	select * from Usuario;

	select * from Jogador;

	select * from Partidas_Jogador;

	select idPartida as partida , Pontos_Partida as pontos from Jogador join Partidas_Jogador on fkJogador = idJogador WHERE idJogador = 1;
    
	select idPartida as partida , Pontos_Partida as pontos from Jogador join Partidas_Jogador on fkJogador = idJogador WHERE idJogador = 2;
    
	select idPartida as partida , Pontos_Partida as pontos from Jogador join Partidas_Jogador on fkJogador = idJogador WHERE idJogador = 3;

	insert into votos (id_jogador, id_usuario) values
    (1, 1),
    (2, 1);

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




