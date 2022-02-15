const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers/author');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/authors', controllers.getAll);

app.get('/authors/new', controllers.newAuthor);

app.get('/authors/:id', controllers.getOne);

app.post('/authors', controllers.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening door ${PORT}`);
});
