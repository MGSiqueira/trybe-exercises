SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT * FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) AS 'Clientes ativos na loja 1' FROM sakila.customer
WHERE active IS TRUE AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active IS FALSE AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;