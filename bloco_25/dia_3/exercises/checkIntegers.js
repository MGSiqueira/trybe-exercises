function checkIntegers(number) {
  if(typeof number !== 'number') return 'parameter must be a number'
  if(number > 0) return 'positive';
  if(number < 0) return 'negative';
  return 'neutral'
}

module.exports = checkIntegers;

// ou module.exports = (number) => ...