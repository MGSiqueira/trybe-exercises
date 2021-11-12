const { ObjectId } = require('mongodb');

const connection = require('./connection');

const Author = require('./Author');

const getAll =  async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (authorId) => connection()
  .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());

const getById = async (bookId) => {
  const bookData = await connection()
    .then((db) => db.collection('books').findOne({ _id: new ObjectId(bookId) }));

  if (!bookData) return null;

  return bookData;
};

const validateBook = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24 || !(await Author.findById(authorId))) return false;

  return true;
};

const createBook = async (title, authorId) => connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }));

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  validateBook,
  createBook,
};
