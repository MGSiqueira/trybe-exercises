SELECT rating, AVG(length) average_length
FROM sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115 AND 121.50
ORDER BY average_length DESC;

SELECT rating, SUM(replacement_cost) total_cost
FROM sakila.film
GROUP by rating
HAVING total_cost > 3950.50
ORDER BY total_cost;
    