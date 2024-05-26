function countFrequency(inputArray) {
  let highestFrequencyValue;
  let mostCommonElement;

  if (Array.isArray(inputArray)) {
    let elementCountArray = []; // variable to store element count array

    for (let i = 0; i < inputArray.length; i++) {
      let elementCount = 0; // declare element count

      for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[i] == inputArray[j]) {
          elementCount++; // increment by 1 if found the same element
        }
      }

      elementCountArray.push(elementCount); // add element count to element count array
    }

    // find the highest frequency value
    highestFrequencyValue = Math.max(...elementCountArray);

    // find the index of highest frequency in elementCountArray
    let highestFrequencyIndex = elementCountArray.indexOf(
      highestFrequencyValue
    );

    // find the element that holds the highest frequency in the input array
    mostCommonElement = inputArray[highestFrequencyIndex];
  }

  // return result as a string
  return mostCommonElement + " (" + highestFrequencyValue + " times)";
}

console.log(countFrequency([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
