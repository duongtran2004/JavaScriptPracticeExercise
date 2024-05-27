function listProperty(inputObject) {
  //object holds the key - value pair
  //we only want to print the properties, meaning only print the key
  if (typeof inputObject == "object") {
    let keys = Object.keys(inputObject); //store keys into an array
    return keys;
  }
}
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

let propertyArray = listProperty(student);
let objectLength = propertyArray.length;
console.log(objectLength);
