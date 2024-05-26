function reverseCase(inputString) {
  // Store inputString as an array of characters
  if (typeof inputString === "string") {
    let stringArray = inputString.split(""); // Convert string to array

    // Loop through each character (array's element)
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === stringArray[i].toUpperCase()) {
        // If a character is uppercase => convert to lowercase
        stringArray[i] = stringArray[i].toLowerCase();
      } else if (stringArray[i] === stringArray[i].toLowerCase()) {
        // If a character is lowercase => convert to uppercase
        stringArray[i] = stringArray[i].toUpperCase();
      }
    }

    // Convert back to string from array
    let newString = stringArray.join("");
    return newString;
  }
  return null;
}

console.log(reverseCase("DuonGJDB")); // Output: dUONgjdb
