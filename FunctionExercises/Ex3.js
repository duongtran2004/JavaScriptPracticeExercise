function stringCombinationGenerator(inputString) {
  let resultArray = [];
  if (typeof inputString === "string") {
    let stringLength = inputString.length;
    // Loop through each character of the string
    for (let i = 0; i < stringLength; i++) {
      // Generate substrings of varying lengths starting from character i
      for (let j = i + 1; j <= stringLength; j++) {
        let resultString = inputString.substring(i, j);
        resultArray.push(resultString);
      }
    }
  }
  return resultArray;
}

console.log(stringCombinationGenerator("dog"));
