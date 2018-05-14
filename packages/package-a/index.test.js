const packageA = require('./');

test('returns correct string', () => {
  expect(packageA).toBe('Package A Test 2 and TEST');
});