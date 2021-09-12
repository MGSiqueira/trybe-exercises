SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluido.') FROM Projects;

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 1;

SELECT Name, Hours FROM Projects
ORDER BY Hours LIMIT 1 OFFSET 1;

SELECT * FROM Projects
ORDER BY Hours LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') FROM Scientists;