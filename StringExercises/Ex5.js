function parameterize(inputString) {
  if (typeof inputString == "string") {
    //we need to reassign the value, other wise it would just create a new string
    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/ /g, "-"); //using regular expression: /pattern/modifier(s);
    // pattern: " " (spacebar), modifiers/flag": g for global
    return inputString;
  }
  return null;
}

console.log(parameterize("Duong Tran Dang"));
