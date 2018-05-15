const packageB = require('./index');

test('returns correct string', () => {
  expect(packageB).toBe('Package B and TEST');
});