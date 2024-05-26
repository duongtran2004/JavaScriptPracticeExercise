function humanizeFormat(inputInteger) {
  let inputString = "";
  let suffix = "";
  let lastChar = "";
  if (Number.isInteger(inputInteger)) {
    inputString = inputInteger.toString();
    //get the last character
    lastChar = inputString.charAt(inputString.length - 1); //use string.length - 1 since string index start from 0
    console.log("last char = " + lastChar);
    // cases
    if (lastChar == "1") {
      console.log("hello");
      suffix = "st";
    } else if (lastChar == "2") {
      if (inputInteger == 12) {
        //case for twelveth
        suffix = "th";
      } else {
        suffix = "nd";
      }
    } else if (lastChar == "3") {
      if (inputInteger == 13) {
        //case for thirdteenth
        suffix = "th";
      } else {
        suffix = "rd";
      }
    } else {
      suffix = "th";
    }
  }

  return inputInteger + suffix;
}

console.log(humanizeFormat(12));
// note
