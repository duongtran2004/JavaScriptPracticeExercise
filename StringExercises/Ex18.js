function countSubString(originalString, subString) {
  let numberOfSubstring = 0;
  if (typeof originalString == "string" && typeof subString == "string") {
    //to lowercase both strings
    originalString = originalString.toLowerCase();
    subString = subString.toLowerCase();
    subStringLength = subString.length;
    looptime = originalString.length - subString.length;
    for (i = 0; i <= looptime; i++) {
      if (originalString.substring(i, i + subStringLength) == subString) {
        numberOfSubstring = numberOfSubstring + 1;
      }
    }
  }
  return numberOfSubstring;
}

console.log(
  countSubString("The quick brown fox jumps over the lazy dog", "the")
);

console.log(
  countSubString("The quick brown fox jumps over the lazy dog", "fox")
);
