const fs = require('fs');

function writeArchive(name, content) {
  fs.writeFileSync(`./${name}`, content);

  return 'ok';
};

module.exports = writeArchive;
