/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr1 = str1.toLowerCase().split('').sort();
  const arr2 = str2.toLowerCase().split('').sort();
  if (arr1.join('') === arr2.join('')) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
