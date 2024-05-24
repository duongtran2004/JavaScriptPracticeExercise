function isString(input) {
  if (typeof input == "string") {
    return true;
  }
  return false;
}

console.log(isString(122));
console.log(isString(" Hello"));
