const author = require('../models/author');

const getAll = async (_req, res) => {
  const authors = await author.getAll();

  res.status(200).render('authors/index', { authors });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const choosen = await author.getOne(id);

  if (!choosen) return res.status(404).render('404');

  res.status(200).render('authors/show', { choosen });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
};

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await author.create(first_name, middle_name, last_name);
  res.redirect('authors');
}

module.exports = {
  getAll,
  getOne,
  newAuthor,
  create,
};
