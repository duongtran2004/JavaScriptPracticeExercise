function camelize(inputString) {
  //step 1: split string into array, each element is a word (split by space " ")
  //step 2: to lowercase for each word
  //step 3: char at (0) for string to turn the first letter into String
  //step 4: to capitalize for first letter
  //step 5: apped back to word (capitalized first letter + slice from (1) - second character)
  //step 6: append back all the words without space

  if (typeof inputString == "string") {
    //variable to store result (currently empty string)
    let result = "";
    let stringArray = inputString.split(" ");

    for (i = 0; i < stringArray.length; i++) {
      //loop thorugh stringArray
      //the first word
      if (i == 0) {
        let word = stringArray[i]; //get each word
        word = word.toLowerCase(); // lowercase each word
        //append word to the result string
        result = result + word;
      } else {
        //from second word and so on
        let word = stringArray[i]; //get each word
        word = word.toLowerCase(); // lowercase each word
        let firstLetter = word.charAt(0); //get first letter of each word
        firstLetter = firstLetter.toUpperCase(); //uppercase the first letter
        word = firstLetter + word.slice(1, word.length); //modified the word
        //append word to the result string
        result = result + word;
      }
    }
    return result;
  }
}

console.log(camelize("doony ho phila "));
