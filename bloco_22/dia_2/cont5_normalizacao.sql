CREATE DATABASE IF NOT EXISTS normalizacao;

USE normalizacao;

CREATE TABLE funcionario(
	funcionario_id TINYINT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    data_cadastro DATETIME NOT NULL
) ENGINE = InnoDB;

CREATE TABLE setor(
	setor_id TINYINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    setor VARCHAR(20) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE funcionario_setor(
	funcionario_id TINYINT NOT NULL,
    setor_id TINYINT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE = InnoDB;

INSERT INTO funcionario (funcionario_id, first_name, last_name, email, phone, data_cadastro)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor (setor_id, setor)
VALUES
	(1, 'Administração'), (2, 'Vendas'), (3, 'Operacional'), (4, 'Estratégico'), (5, 'Marketing');
    
INSERT INTO funcionario_setor
VALUES
	(12, 1), (12, 2), (13, 3), (14, 4), (14, 2), (15, 5);    

SELECT CONCAT(f.first_name, ' ', f.last_name) Funcionário,
s.setor Setor
FROM funcionario_setor fs
JOIN funcionario f ON f.funcionario_id = fs.funcionario_id
JOIN setor s ON s.setor_id = fs.setor_id;
