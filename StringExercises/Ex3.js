function stringToArray(string) {
  let stringArray;
  if (typeof string == "string") {
    stringArray = string.split(" ");
  }
  return stringArray;
}

console.log(stringToArray("Duong Tran Dang"));
