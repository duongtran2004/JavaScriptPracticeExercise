function reverseNumber(inputNumber) {
  if (typeof inputNumber == "number") {
    let numberString = "";
    numberString = inputNumber.toString();
    let numberStringArray = numberString.split("");
    let reversedStringArray = numberStringArray.reverse();
    let reversedString = reversedStringArray.join(""); //joint with empty string, meaning no commas

    return reversedString;
  }
}

console.log(reverseNumber(6786875));
