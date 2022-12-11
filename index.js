function isPalindrome(word) {
  // Write your algorithm here
  const wordString = word.split('');
  const wordReverse= wordReverse.join('')
  const wordJoin = wordReverse.join('')

  if(word === wordJoib){
    return true
  }
  else{
    return false
  }
}


/* 
  Add your pseudocode here
  Declare the variable taking one argument
  Convert to an array
  Reverse the array
  Change it back to a string
  Compare the original string and reversed string
  Return solution
*/

/*
  Add written explanation of your solution here
   declare isPalindrome variable that takes string as an argument
  change the string into an array using split('')
  Reverse the array using reverse()
  change the array back to srtring using join('')
  use if statement to determine if the original string and the reversed string are equal using ===
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
