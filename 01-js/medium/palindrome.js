/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanString = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let n = cleanString.length;

  for (let i = 0; i < n / 2; i++) {
    if (cleanString[i] !== cleanString[n - i - 1]) {
      return false
    }
  }

  return true;
}

module.exports = isPalindrome;




// [^a-zA-Z]/g: This is a regular expression (regex) pattern. Let's break it down:

// [^a-zA-Z]: This part is a character class that matches any character that is not an uppercase (A-Z) or lowercase (a-z) letter. The ^ inside the square brackets negates the character class, meaning it matches anything not specified in the brackets.

// /g: This is a flag that stands for "global." When used with replace, it indicates that the replacement should be done globally throughout the entire string. Without the global flag, only the first match would be replaced.