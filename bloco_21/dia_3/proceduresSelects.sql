-- 1
-- do jeito que foi pedido
SELECT fa.actor_id, COUNT(*) qty_movies FROM film_actor fa
GROUP BY actor_id
ORDER BY qty_movies DESC
LIMIT 10;
-- com nome porque eu quis
SELECT a.actor_id,
	a.first_name,
    a.last_name,
    COUNT(film_id) qty_movies
FROM film_actor fa
INNER JOIN actor a ON a.actor_id = fa.actor_id
GROUP BY a.actor_id
ORDER BY qty_movies DESC
LIMIT 10;

-- 2
SELECT 'Animation' INTO @category;
SELECT f.film_id, f.title, c.category_id, c.name FROM film f
INNER JOIN category c
WHERE f.film_id IN (
	SELECT fc.film_id FROM film_category fc
    WHERE fc.category_id = c.category_id)
AND c.name = @category;

-- 3
SELECT 'MARY.SMITH@sakilacustomer.org' INTO @email;
SELECT @isActive;
SET @isActive = (
	SELECT active FROM sakila.customer
    WHERE email = @email);
