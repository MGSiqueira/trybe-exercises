INSERT INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Marcos', 'Siqueira', 5, 'marcos.siqueira98@gmail.com', 1, 1, 'MGS', 123456);

INSERT INTO sakila.staff
	(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Selina', 'Kyle', 7, 'Selina.Kyle@sakilastaff.com', 1, 1, 'SelinaCat', 'iAmCatWoman'),
('Shrek', 'Ogre', 6, 'Shrek.Ogre@sakilastaff.com', 2, 1, 'Shrek', 'jureg');

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer;

INSERT INTO sakila.category (name) VALUES
	('category1'), ('category2'), ('category3');

INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
	(3, 3);

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'Jules';

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 AND replacement_cost > 20
AND rating IN ('G', 'PG', 'PG-13');

UPDATE sakila.film
SET	rental_rate = (
CASE WHEN length < 100 THEN 10
	ELSE 20
END);

-- Deletando a cagada que eu fiz na linha 12
DELETE FROM sakila.actor
WHERE actor_id > 205;
-- Checando o id de Karl
SELECT * FROM sakila.actor
WHERE first_name = 'KARL';
-- Deletando de film_actor
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
-- Deletando de actor
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
-- Checando a id de Matthew
SELECT * FROM sakila.actor
WHERE first_name = 'MATTHEW';
-- Deletando de film_actor
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
-- Deletando de actor
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

-- E então o sakila foi deletado e restaurado para seu estado inicial.
SELECT * FROM sakila.film_category;