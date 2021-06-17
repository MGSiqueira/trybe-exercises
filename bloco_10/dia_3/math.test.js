const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('#subtrair', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(4, 2);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair(4, 2)).toBe(2);
  expect(math.somar).toHaveBeenCalledTimes(2); // OLHA ISSO! O chamar da função não fica restrito ao teste
});