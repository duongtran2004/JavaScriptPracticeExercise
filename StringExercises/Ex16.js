function truncateString(inputString, truncatePosition) {
  let newString = "";
  if (typeof inputString == "string" && Number.isInteger(truncatePosition)) {
    newString = inputString.substring(0, truncatePosition) + " ...";
  }
  return newString;
}
console.log(
  "🚀 ~ truncateString ~ truncateString:",
  truncateString("DuongTranDang", 5)
);
