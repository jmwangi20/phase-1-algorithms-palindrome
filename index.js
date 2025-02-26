function isPalindrome(word) {
  // Write your algorithm here
  let name = "";

  for(let i = word.length - 1; i >= 0; i--){
    name += word[i]
    console.log(name)
  }
  if(name === word){
    return true
  }
  else{
    return false
  }

}

/* 
  Add your pseudocode here
  create a function names isPalindrome and give it a single parameter 

  create an empty variable with let keyword so that we can git it the reverse string and allows us to change the values stored in it 
  loop through the argument passed and print it from the reverse using i--;
  check for equality between the reversed name and the argument passed in the function 
  return true or false base on the equality
*/

/*
  Add written explanation of your solution here
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
