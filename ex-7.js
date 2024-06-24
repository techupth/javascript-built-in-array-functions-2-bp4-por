function isPalindrome(string) {
  // Start coding here
  let revertedString = [...string].reverse();
  if (revertedString.join("") === string) {
    return true;
  }
  return false;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false