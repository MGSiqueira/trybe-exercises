const connection = require('../connection');

function formatUser(document) {
  const { _id, password, ...user } = document;

  const formattedResult = {
    id: _id,
    ...user,
  }
  return formattedResult;
}

function validateUser({ firstName, lastName, email, password }) {
  const regexPassword = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
    return false;
  }

  return regexPassword.test(password);
}

function createUser(user) {
  const { firstName, lastName, email, password } = user;

  return connection().then((db) => db.collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertId, firstName, lastName, email }));
}

module.exports = {
  validateUser,
  createUser
}