jest.unmock('package-a');
jest.unmock('package-b');
const log = jest.fn();
console.log = log;
const mainApp = require('./packages/main-app/');
test('outputs correct string', () => {
  expect(log.mock.calls.length).toBe(4);
  expect(log.mock.calls[0][0]).toBe('Main App Test 2 and TEST');
  expect(log.mock.calls[1][0]).toBe('Package A Test 2 and TEST');
  expect(log.mock.calls[2][0]).toBe('Package B and TEST');
});
