const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
  })
  .then(content => {
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });


// com Promise.all

const fsPromises = require('fs').promises;

Promise.all([
  fsPromises.readFile('file1.txt'),
  fsPromises.readFile('file2.txt'),
  fsPromises.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });