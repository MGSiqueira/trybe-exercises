const express = require('express');

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Listening at port 3000');
});
