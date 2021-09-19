-- 1
SELECT m.title, b.international_sales, b.domestic_sales FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id;

-- 2
SELECT m.title, b.international_sales, b.domestic_sales FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

-- 3
SELECT m.title, b.rating FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- 4
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes FROM Theater t
LEFT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- 5
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes FROM Theater t
RIGHT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- 6
-- usando subquery
SELECT title FROM Movies
WHERE id IN 
	(SELECT movie_id FROM BoxOffice
	WHERE rating > 7.5);

-- usando INNER JOIN
SELECT m.title FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id AND b.rating > 7.5;

-- 7
-- usando subquery
SELECT rating FROM BoxOffice
WHERE movie_id IN
	(SELECT id FROM Movies
	WHERE year > 2009);
    
-- usando INNER JOIN
SELECT rating from BoxOffice b
INNER JOIN Movies m
ON b.movie_id = m.id AND m.year > 2009;

-- 8
SELECT name, location FROM Theater t
WHERE EXISTS (
	SELECT * FROM Movies
    WHERE t.id = theater_id);
    
-- 9
SELECT name, location FROM Theater t
WHERE NOT EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = t.id);
    
-- 10
SELECT m.title, m.director, m.year, m.length_minutes FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;

-- 11
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Movies t1, Movies t2
WHERE t1.director = t2.director AND t1.title <> t2.title
ORDER BY t1.title;

-- 12
-- usando subquery
SELECT m.title FROM Movies m
WHERE id IN (
	SELECT movie_id FROM BoxOffice
    WHERE domestic_sales + international_sales > 500000000
    AND m.length_minutes > 110);

-- usando INNER JOIN
SELECT m.title FROM Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id
WHERE b.domestic_sales + b.international_sales > 500000000
AND m.length_minutes > 110;
