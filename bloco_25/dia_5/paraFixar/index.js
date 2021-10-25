const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', (req, res) => {
  res.send('open!');
});

app.get('/closed', authMiddleware, (req, res) => {
  res.send('closed!');
});

const drinksRouter = require('./drinksRouter');

app.use('/drinks', drinksRouter);

app.all('*', function(req, res) {
  return res.status(404).json({ message: `Rota ${req.path} não existe!`});
});

app.listen(3001, () => {
  console.log('Avaliação ouvindo a porta 3001');
});
