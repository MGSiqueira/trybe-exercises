CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE localizations(
	localization_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    localization_name VARCHAR(20)
) ENGINE = InnoDB;

INSERT INTO localizations (localization_name)
VALUES
	('Nort'), ('Northeast'), ('East'), ('Southeast'), ('South'), ('Southwest'), ('West'), ('Northwest');

CREATE TABLE species(
	specie_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    specie_name VARCHAR(50)
) ENGINE = InnoDB;

INSERT INTO species (specie_name)
VALUES
	('hippopotamus'), ('lion'), ('zebra'), ('giraffe'), ('gorilla');

CREATE TABLE animals(
	animal_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    animal_name VARCHAR(20) NOT NULL,
    specie_id TINYINT NOT NULL,
    gender VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    localization_id TINYINT NOT NULL,
    FOREIGN KEY (localization_id) REFERENCES localizations(localization_id),
    FOREIGN KEY (specie_id) REFERENCES species(specie_id)
) ENGINE = InnoDB;

INSERT INTO animals (animal_name, specie_id, gender, age, localization_id)
VALUES
	('Bob', 1, 'male', 5, 4),
    ('Matilda', 1, 'female', 7, 4),
    ('Alex', 2, 'male', 10, 1),
    ('Simba', 2, 'male', 1, 1),
    ('Ksar', 5, 'male', 11, 7),
    ('Nala', 5, 'female', 11, 7),
    ('Anna', 5, 'female', 3, 7);

CREATE TABLE managers(
	manager_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
) ENGINE = InnoDB;

CREATE TABLE caregivers(
	caregiver_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    manager_id TINYINT,
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
) ENGINE = InnoDB;

CREATE TABLE caregiver_animal(
	caregiver_id TINYINT,
    animal_id TINYINT,
    FOREIGN KEY (caregiver_id) REFERENCES caregivers(caregiver_id),
    FOREIGN KEY (animal_id) REFERENCES animals(animal_id)
) ENGINE = InnoDB;
