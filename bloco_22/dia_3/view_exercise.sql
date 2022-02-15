CREATE VIEW film_with_categories AS
	SELECT f.title title, c.category_id category_id, c.name name FROM film_category fc
    JOIN film f ON f.film_id = fc.film_id
    JOIN category c ON c.category_id = fc.category_id
    ORDER BY title;

SELECT * FROM film_with_categories;

CREATE VIEW film_info AS
	SELECT a.actor_id actor_id,
    CONCAT(a.first_name, ' ', a.last_name) actor,
    f.title title FROM film_actor fa
    JOIN actor a ON a.actor_id = fa.actor_id
    JOIN film f ON f.film_id = fa.film_id
    ORDER BY actor;
    
SELECT * FROM film_info;

CREATE VIEW address_info AS
	SELECT a.address_id,
	a.address,
    a.district,
    c.city_id,
    c.city FROM address a
    JOIN city c ON c.city_id = a.city_id
    ORDER BY c.city;
    
SELECT * FROM address_info;

CREATE VIEW movie_languages AS
	SELECT f.title, l.language_id, l.name FROM film f
    JOIN language l ON l.language_id = f.language_id
    ORDER BY f.title;
    
SELECT * FROM movie_languages;
    