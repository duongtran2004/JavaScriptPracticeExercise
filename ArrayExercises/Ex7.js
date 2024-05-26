function sortArray(inputArray) {
  if (Array.isArray(inputArray)) {
    inputArray = inputArray.sort((a, b) => a - b); //arrow function
  }
  return inputArray;
}
//function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   } else if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

console.log(sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1]));
