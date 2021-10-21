const fs = require('fs').promises;

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(content => JSON.parse(content));
};

function setSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
};

module.exports = { getSimpsons, setSimpsons };
