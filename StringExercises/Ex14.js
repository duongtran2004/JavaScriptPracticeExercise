function insertString(orginalString, stringToAdd, position) {
  let newString = "";
  if (
    typeof orginalString == "string" &&
    typeof stringToAdd == "string" &&
    Number.isInteger(position)
  ) {
    let firstHalf = orginalString.substring(0, position);
    let secondHalf = orginalString.substring(position, orginalString.length);
    newString = firstHalf + stringToAdd + secondHalf;
    return newString;
  }
}

console.log(insertString("HelloMama", "Form", 5));
