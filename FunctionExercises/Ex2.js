function reverseString(inputString) {
  if (typeof inputString == "string") {
    let stringArray = inputString.split("");
    let reversedStringArray = stringArray.reverse();
    let reversedString = reversedStringArray.join(""); //joint with empty string, meaning no commas

    return reversedString;
  }
}

function isPalindrome(inputString) {
  if (typeof inputString == "string") {
    if (inputString == reverseString(inputString)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("fox"));
