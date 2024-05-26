function secondLowestAndGreatest(inputArray) {
  if (Array.isArray(inputArray)) {
    let ascendingArray = inputArray.sort((a, b) => a - b);

    let uniqueAscendingArray = [];
    uniqueAscendingArray.push(ascendingArray[0]); // Include the first element, since inside the for loop we cannot push the first element (would be undefined)

    //remove duplicates (not using set ) => loop thorugh and push unique element into another array
    for (let i = 1; i < ascendingArray.length; i++) {
      //start from 1, since we have to compare at least 2 elements together
      if (ascendingArray[i] !== ascendingArray[i - 1]) {
        uniqueAscendingArray.push(ascendingArray[i]);
      }
    }

    let uniqueDescendingArray = [...uniqueAscendingArray].reverse();
    console.log(
      "🚀 ~ secondLowestAndGreatest ~ uniqueAscendingArray:",
      uniqueAscendingArray
    );
    console.log(
      "🚀 ~ secondLowestAndGreatest ~ uniqueDescendingArray:",
      uniqueDescendingArray
    );

    let secondGreatest = uniqueDescendingArray[1];
    let secondLowest = uniqueAscendingArray[1];
    return (
      "Second lowest: " + secondLowest + " Second Greatest : " + secondGreatest
    );
  }
}

console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]));
