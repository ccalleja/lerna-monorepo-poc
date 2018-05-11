const packageA = require('./');

test('returns correct string', () => {
  expect(packageA).toBe('Package A and TEST');
});