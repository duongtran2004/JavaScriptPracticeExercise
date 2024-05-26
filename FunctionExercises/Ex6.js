function findLongestWord(inputString) {
  let longestWord = "";
  if (typeof inputString == "string") {
    let stringArray = inputString.split(" ");
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > longestWord.length) {
        longestWord = stringArray[i];
      }
    }
    return longestWord;
  }
}

console.log(findLongestWord("Web Development Tutorial"));
