import twoSum from './twoSums';

test('Returns null if target cannot be achieved', () => {
  const response = twoSum([1, 2, 3, 4], 8);
  expect(response).toBeFalsy();
});

test('Works when the numbers are far apart', () => {
  const response = twoSum([1, 7, 3, 4], 5);
  expect(response).toEqual([0, 3]);
});

test('Returns only 2 indices when more results are possible', () => {
  const response = twoSum([1, 2, 3, 4, 5], 6);
  expect(response).toHaveLength(2);
});

test('Works when the correct answer is at the end of the array', () => {
  const response = twoSum([1, 2, 3, 4, 5, 6, 7], 13);
  expect(response).toStrictEqual([5, 6]);
});

test('Works with negative numbers', () => {
  const response = twoSum([-1, 2, -3, 4, 5], -4);
  expect(response).toEqual([0, 2]);
});
