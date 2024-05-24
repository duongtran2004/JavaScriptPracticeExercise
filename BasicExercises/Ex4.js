//area of a triangle knowing 3 sides: Heron Formula
let firstSide = 5;
let secondSide = 6;
let thirdSide = 7;

let perimeter = firstSide + secondSide + thirdSide;
let s = perimeter / 2; //semiperimeter
let area = Math.sqrt(
  s * (s - firstSide) * (s - secondSide) * (s - thirdSide)
).toFixed(2);

//round to 2 decimal place
//console.log(semiperimeter);

console.log(area);
