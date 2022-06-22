/* eslint-disable no-plusplus */
const isPalindrome = function (x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  const str = x.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
};

export default isPalindrome;
