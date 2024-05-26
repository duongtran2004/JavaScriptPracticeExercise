function concatNTimes(inputString, times) {
  if (typeof inputString == "string" && Number.isInteger(times)) {
    let cloneString = inputString;
    for (i = 0; i <= times; i++) {
      inputString = inputString + cloneString;
    }
    return inputString;
  }
}

console.log(concatNTimes("Duong", 6));
