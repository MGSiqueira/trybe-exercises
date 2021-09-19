-- right, left, or inner join
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name DESC;

-- self join
SELECT t1.title, t1.replacement_cost, t1.length, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost
ORDER BY t1.film_id, t2.film_id;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.rental_duration = t2.rental_duration AND t1.rental_duration BETWEEN 2 AND 4;
