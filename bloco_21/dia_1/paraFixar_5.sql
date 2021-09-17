SELECT ROUND(AVG(length), 2) AS 'Média de duração',
	MIN(length) AS 'Duração mínima',
	MAX(length) AS 'Duração máxima',
	SUM(length) AS 'Tempo de exibição total',
	COUNT(*) AS 'Filmes registrados'
FROM sakila.film;
