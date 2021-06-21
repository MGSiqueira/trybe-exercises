const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Let see what the api return:', () => {
  it('should have certain projects:', async() => {
    const api = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(api).toContain('sd-01-week4-5-project-todo-list');
    expect(api).toContain('sd-01-week4-5-project-meme-generator');
  });
});