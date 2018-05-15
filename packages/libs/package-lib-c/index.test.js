const packageB = require('./');

test('returns correct string', () => {
  expect(packageB).toBe('Package Library C and TEST');
});