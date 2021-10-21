const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { getSimpsons, setSimpsons } = require('./fsSimpsons');

// ex 1
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// ex 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}`});
});

// ex 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).json({ message: 'Unauthorided' });

  res.status(200).json({ message: `Hello, ${name}`});
});

// ex 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Your name is ${name}, and you are ${age} years old`});
});

// ex 6
app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();
  res.json(simpsons);
});

// ex 7
app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const simpson = simpsons.find(simp => simp.id === id);
  
  if (!simpson) return res.status(404).json({ message: 'simpson not found'});
  
  return res.json(simpson);
});

// ex 8
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists'});
  };

  simpsons.push({ id, name });

  await setSimpsons(simpsons);

  res.status(204).end();
});

app.use((err, req, res, next) => {
  res.status(500).send(`Something wrong ist't right: ${err.message}`);
});

app.listen(3001, () => {
  console.log('Application listening in door 3001');
});
