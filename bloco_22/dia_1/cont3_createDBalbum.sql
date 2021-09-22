USE albuns;

CREATE DATABASE IF NOT EXISTS albuns;

CREATE TABLE artistas(
	artista_id TINYINT PRIMARY KEY,
    nome_artista VARCHAR(30)
) ENGINE = InnoDB;
    
CREATE TABLE estilo_musical(
	estilo_id TINYINT PRIMARY KEY,
    nome_estilo VARCHAR(30)
) ENGINE = InnoDB;

CREATE TABLE albuns(
	album_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    artista_id TINYINT NOT NULL,
    titulo VARCHAR(30) NOT NULL,
    preco DOUBLE NOT NULL,
    estilo_id TINYINT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES  artistas(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id)
) ENGINE = InnoDB;
