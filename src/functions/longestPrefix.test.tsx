import longestCommonPrefix from './longestPrefix';

test('returns empty string when given input is empty', () => {
  const response = longestCommonPrefix(['']);
  expect(response).toEqual('');
});

test('works with multiple same words', () => {
  const response = longestCommonPrefix(['test', 'test']);
  expect(response).toEqual('test');
});

test('returns common prefix from 3 strings', () => {
  const response = longestCommonPrefix(['testasd', 'testaa', 'testerino']);
  expect(response).toEqual('test');
});

test('return empty string when there are no common prefixes', () => {
  const response = longestCommonPrefix(['hello', 'world', 'testerino', 'test']);
  expect(response).toEqual('');
});

test('Returns the same word when only one word is given', () => {
  const response = longestCommonPrefix(['test']);
  expect(response).toEqual('test');
});
