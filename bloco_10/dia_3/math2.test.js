const math = require('./math');

test('#subtrair', () => {
  math.subtrair = jest.fn();
  
  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  math.subtrair.mockRestore();
});

test('#multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);
  math.multiplicar();

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalledTimes(2);
});

test('#somar', async() => {
  const mockSomar = jest.spyOn(math, 'somar');
  mockSomar.mockResolvedValue(5);

  mockSomar(2, 3);
  expect(await mockSomar(2, 2)).toBe(4);
  expect(mockSomar).toHaveBeenCalledWith(2, 3);
  expect(mockSomar).toHaveBeenCalledTimes(2);
});

test('#dividir', () => {
  math.dividir = jest.spyOn(math, 'dividir')
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);
  
  expect(math.dividir(4, 2)).toBe(2);
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);
});

test('#subtrair.v2', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(5);

  expect(mockSubtrair(10, 2)).toBe(5);
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});