SELECT first_name, IF(active, 'Cliente ativo', 'Cliente inativo') AS Status FROM sakila.customer;

SELECT film_id, title, IF(title = 'ace goldfinger',
	'Já assisti a este filme',
    'Não concheço o filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating,
	CASE
		WHEN rating = 'g' THEN 'Livre para todos'
        WHEN rating = 'pg' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'pg-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'r' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS 'público alvo'
FROM sakila.film;