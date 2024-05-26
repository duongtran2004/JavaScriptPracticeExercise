function capitalizeFirstLetter(inputString) {
  let firstLetter;
  if (typeof inputString == "string") {
    // remember to re-assign
    firstLetter = inputString.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    inputString = inputString.slice(1);
    console.log("🚀 ~ capitalizeFirstLetter ~ firstLetter:", firstLetter);
    return firstLetter + inputString;
  }
}

console.log(capitalizeFirstLetter("duongTran"));
