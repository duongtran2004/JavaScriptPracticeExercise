function truncateString(inputString, truncateIndex) {
  let newString;
  if (typeof inputString == "string" && Number.isInteger(truncateIndex))
    newString = inputString.substring(0, truncateIndex);
  return newString;
}

console.log(truncateString("helloha", 4));
// console.log()
// console.log()
