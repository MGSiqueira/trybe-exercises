const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo';

fs.writeFile(nomeDoArquivo, 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });


// com async/await

async function main() {
  try {
    fs.writeFile(nomeDoArquivo, 'Meu textão');
    console.log('Arquivo escrito com async/await!');
  } catch (err) {
    console.error(err.message);
  }
};

main();
