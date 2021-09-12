SELECT * FROM Provides
WHERE Provider = 'RBT';

SELECT * FROM Provides
ORDER BY Price DESC LIMIT 5;

SELECT DISTINCT Provider, Price FROM Provides
ORDER BY Price DESC LIMIT 4 OFFSET 2;

SELECT * FROM Provides
WHERE Provider = 'Hal'
ORDER BY Price DESC;

SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;

SELECT * FROM Provides
WHERE CONTAINS(Provider, 'RB');
