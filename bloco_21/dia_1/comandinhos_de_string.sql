SELECT UCASE('Oi, eu sou uma string');
SELECT LCASE('Oi, eu sou uma string');
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 3);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT CHAR_LENGTH('Oi, eu sou uma string');
SELECT SUBSTRING('Oi, eu sou uma string', 1, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'A', 'FOO ') FROM sakila.film LIMIT 10;
SELECT LEFT(title, 10) FROM sakila.film LIMIT 10;
SELECT RIGHT(title, 10) FROM sakila.film LIMIT 10;
SELECT CHAR_LENGTH(title) FROM sakila.film LIMIT 10;
SELECT SUBSTRING(title, 3, 5) FROM sakila.film LIMIT 10
