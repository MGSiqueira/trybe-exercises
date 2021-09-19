SELECT fa.actor_id, a.first_name, fa.film_id FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id;

SELECT s.first_name, s.last_name, a.address FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

SELECT c.customer_id,
	CONCAT(c.first_name, ' ', c.last_name) name,
    c.email,
    a.address_id,
    a.address
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.first_name, c.last_name
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address) quantity_of_addresses FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT s.first_name, s.last_name, ROUND(AVG(p.amount), 2) average_payment FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, f.film_id, f.title FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film f
ON f.film_id = fa.film_id;
