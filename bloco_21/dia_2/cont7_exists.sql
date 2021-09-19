SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

SELECT Id, Title FROM hotel.Books b
WHERE NOT EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = Books_Lent.book_id
);

SELECT Id, Title FROM hotel.Books b
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id AND b.Title LIKE '%lost%'
);

SELECT `Name` FROM hotel.Customers cus
WHERE NOT EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE cus.CustomerId = CustomerID
);

SELECT cus.`Name`, cars.`Name` FROM hotel.Customers cus
INNER JOIN hotel.Cars cars
WHERE EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE cus.CustomerId = CustomerID AND cars.Id = carID
);
