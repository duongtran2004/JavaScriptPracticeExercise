function truncateWords(inputString, wordCount) {
  let newString = "";
  if (typeof inputString == "string") {
    let wordArray = inputString.split(" ");
    for (let i = 0; i < wordCount; i++) {
      newString = newString + wordArray[i] + " ";
    }
  }
  return newString;
}
//we can later on use regex (regular expression) to check with more concise syntax

console.log(truncateWords("The quick brown fox jumps over the lazy dog", 4));
