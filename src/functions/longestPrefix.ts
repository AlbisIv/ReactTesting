/* eslint-disable no-plusplus */
const longestCommonPrefix = function (strs: string[]) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }
  return prefix;
};
export default longestCommonPrefix;