const packageA = require('./index');

test('returns correct string', () => {
  expect(packageA).toBe('Package A Test 2 and TEST');
});