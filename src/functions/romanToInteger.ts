/* eslint-disable no-plusplus */
const romanToInteger = (s:string):number => {
  let result = 0;
  if (s == null) {
    result = 0;
  }
  const myMap = new Map();
  myMap.set('I', 1);
  myMap.set('V', 5);
  myMap.set('X', 10);
  myMap.set('L', 50);
  myMap.set('C', 100);
  myMap.set('D', 500);
  myMap.set('M', 1000);

  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (myMap.get(s.charAt(i)) < myMap.get(s.charAt(i + 1))) {
      result -= myMap.get(s.charAt(i));
    } else {
      result += myMap.get(s.charAt(i));
    }
  }
  return result;
};
export default romanToInteger;
