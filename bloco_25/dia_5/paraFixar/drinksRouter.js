const express = require('express');
const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

router.get('/', function (req, res) {
  res.json(drinks);
});

router.get('/search', function(req, res) {
  const { name, minPrice, maxPrice } = req.query;
  const filteredDrinks = drinks
      .filter(drink => drink.name.includes(name)
      && drink.price >= parseInt(minPrice)
      && drink.price < parseInt(maxPrice));
  res.status(200).json(filteredDrinks);
});

router.get('/:id', function(req, res) {
  const { id } = req.params;
  const drink = drinks.find(drink => drink.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found' });

  res.status(200).json(drink);
});

router.get('/validateToken', function(req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid Name!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (typeof price !== 'number'
    || !price || price < 0) return res.status(400).json({ message: 'Invalid Price!'});

  next();
};

router.post('/', validateName, validatePrice, function(req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user;
  drinks.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Drink created successfully!' });
});

router.put('/:id', validateName, validatePrice, function(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex(drink => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function(req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex(drink => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

module.exports = router;
