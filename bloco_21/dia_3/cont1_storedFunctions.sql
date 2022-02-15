-- exemplos
USE sakila;

DELIMITER $$

CREATE FUNCTION CountActorMovies(actor_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE movie_total INT;
    SELECT COUNT(*) FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

SELECT CountActorMovies(107);

DELIMITER $$

CREATE FUNCTION GetFullActorNameById(actor_id INT)
RETURNS VARCHAR(30) READS SQL DATA
BEGIN
	DECLARE full_name VARCHAR(30);
    SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor
    WHERE sakila.actor.actor_id = actor_id INTO full_name;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullActorNameById(51);

-- para fixar
-- 1
DELIMITER $$

CREATE FUNCTION GetTotalPaymentsById(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_payments INT;
    SELECT COUNT(*) FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

SELECT GetTotalPaymentsById(2);

-- 2
DELIMITER $$

CREATE FUNCTION GetMovieNameByInventoryId(id INT)
RETURNS VARCHAR(30) READS SQL DATA
BEGIN
	DECLARE movie_name VARCHAR(30);
	SELECT f.title FROM sakila.film f
    INNER JOIN inventory i
    ON i.film_id = f.film_id
    WHERE i.inventory_id = id
    INTO movie_name;
    RETURN movie_name;
END $$

DELIMITER ;

SELECT GetMovieNameByInventoryId(9);

-- 3
DELIMITER $$

CREATE FUNCTION GetQtyMoviesByCategory(category_name VARCHAR(20))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_movies INT;
	SELECT COUNT(*) FROM film_category fc
    WHERE fc.category_id IN(
		SELECT c.category_id FROM category c
        WHERE c.name = category_name)
	INTO total_movies;
    RETURN total_movies;
END $$

DELIMITER ;

SELECT GetQtyMoviesByCategory('Documentary');
