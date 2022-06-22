import romanToInteger from './romanToInteger';

test('Works with 4 of the same values', () => {
  const response = romanToInteger('IIII');
  expect(response).toEqual(4);
});
test('Works with all Roman numbers', () => {
  const response = romanToInteger('MDCLXVI');
  expect(response).toEqual(1666);
});

test('Works when lower numbers are before bigger numbers', () => {
  const response = romanToInteger('CD');
  expect(response).toEqual(400);
});

test('Works with large roman number', () => {
  const response = romanToInteger('MMMCMXCIX');
  expect(response).toEqual(3999);
});

test('Does not work with no input', () => {
  const response = romanToInteger('');
  expect(response).toBeFalsy();
});
