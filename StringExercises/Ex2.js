function isEmpty(input) {
  if (typeof input == "string" && input.length == 0) {
    return true;
  }

  return false;
}

console.log(isEmpty("hh")); // false
console.log(isEmpty("")); // true
console.log(isEmpty(null)); // false
console.log(isEmpty(undefined)); // false
console.log(isEmpty(0)); // false
console.log(isEmpty([])); // false
