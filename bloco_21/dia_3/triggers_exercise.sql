USE BeeMovies;

-- 1
DELIMITER $$
CREATE TRIGGER InsertMovieRealeaseYear
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER InsertMovieLog
	AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

INSERT INTO movies (movie_id, ticket_price, ticket_price_estimation)
VALUES (1, 30, 15);

-- 2
DELIMITER $$
CREATE TRIGGER UpdateTicketPrice
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price < OLD.ticket_price, 'Decreasing', 'Increasing');
    INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

UPDATE movies
SET ticket_price = 30
WHERE movie_id = 1;

-- 3
DELIMITER $$
CREATE TRIGGER DeleteMovie
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

DELETE FROM movies
WHERE movie_id = 1;

SELECT * FROM movies;
SELECT * FROM movies_logs;
