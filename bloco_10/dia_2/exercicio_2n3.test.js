const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Let us find if this function return the user name or not:', () => {
  it('this one should return the user name', async() => {
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  })

  it('this one should return that the user was not found:', async() => {
    try {
      await getUserName(3);
    } catch (error) {
    expect(error).toEqual({ error: `User with 3 not found.` });
    }
  })

})