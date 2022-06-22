import isPalindrome from './isPalindrome';

test('Negative number returns false', () => {
  const response = isPalindrome(-1);
  expect(response).toBeFalsy();
});

test('A positive number <10 returns true', () => {
  const response = isPalindrome(5);
  expect(response).toBeTruthy();
});

test('A palindrome returns true', () => {
  const response = isPalindrome(14541);
  expect(response).toEqual(true);
});

test('A number that is not a palindrome returns false', () => {
  const response = isPalindrome(332);
  expect(response).toEqual(false);
});

test('A huge palindrome returns true', () => {
  const firstHalf = Math.floor(Math.random() * 1000000000000);
  const palindrome = firstHalf + (firstHalf.toString().split('').reverse().join(''));
  const response = isPalindrome(Number(palindrome));
});
