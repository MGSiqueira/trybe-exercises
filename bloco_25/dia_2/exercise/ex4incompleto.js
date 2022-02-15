const fs = require('fs');

function allCharacters(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

// then

allCharacters('./simpsons.json')
  .then(content => JSON.parse(content))
  .then(chars => chars.map(char => console.log(`${char.id} - ${char.name}`)))
  .catch(err => console.log(`Não foi possível ler o conteúdo \n${err}`));

// async/await
async function showCharacters() {
  try {
    const content = JSON.parse(await allCharacters('./simpsons.json'));
    content.map(char => console.log(`${char.id} - ${char.name}`));
  } catch(err) {
    console.log(`Deu ruim > ${err}`);
  }
}
showCharacters();
