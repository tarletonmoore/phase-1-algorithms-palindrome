function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split(``).reverse().join(``)) {
    return true
  }
  else { return false }
}

/* 
  Add your pseudocode here
  need to make conditions
  have word be read backwords and if so returned true
  if it isn't return false
*/

/*
  Add written explanation of your solution here
  using an if statement to take a string and say if this word is the same forward and backwards, then return true. If the string is not the same, then return false. It is splitting each letter of the string into part of an array, then it is reverseing the letters and joining them back together into a string. The if statement can then read if the string is equal to itself, then return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
