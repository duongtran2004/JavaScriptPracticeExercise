function checkArray(input) {
  if (Array.isArray(input)) {
    return true;
  }
  return false;
}

console.log(checkArray("hello"));
console.log(checkArray([1, 2, 4, 0]));
