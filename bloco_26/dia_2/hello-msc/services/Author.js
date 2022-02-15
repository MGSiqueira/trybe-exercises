const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Já existe um autor(a) com esse nome',
      },
    };
  }
  return Author.create(firstName, middleName, lastName);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'not found',
        message: `Não foi possível encontrar um autor(a) com o id ${id}`,
      },
    };
  }
  return author;
}

const getAll = async () => Author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};