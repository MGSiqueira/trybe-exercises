SELECT first_name FROM sakila.actor GROUP BY first_name;
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length) FROM sakila.film GROUP BY rating;
SELECT rating, MIN(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, MAX(replacement_cost) FROM sakila.film GROUP BY rating;
SELECT rating, SUM(replacement_cost) FROM sakila.film GROUP by rating;
SELECT rating, COUNT(*) FROM sakila.film GROUP by rating;

-- Praticando GROUP BY
SELECT active, COUNT(*) AS 'Quantidade'
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT rating, AVG(length) AS 'Avarege length'
FROM sakila.film
GROUP BY rating
ORDER BY AVG(length) DESC;

SELECT district, COUNT(*) AS 'Number of addresses'
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 5
ORDER BY COUNT(*) DESC;
