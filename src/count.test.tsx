import count from './count';

test('returns empty key pair when string is empty', () => {
  const response = count('');
  expect(response).toEqual({ '': 1 });
});

test('Works with one word', () => {
  const response = count('test');
  expect(response).toEqual({ test: 1 });
});

test('result is truthy', () => {
  const response = count('test');
  expect(response).toBeTruthy();
});

test('works with multiple same words', () => {
  const response = count('test test');
  expect(response).toEqual({ test: 2 });
});

test('works with "," ', () => {
  const response = count('test test, test');
  expect(response).toEqual({ test: 3 });
});
