const packageB = require('./');

test('returns correct string', () => {
  expect(packageB).toBe('Package B and TEST');
});