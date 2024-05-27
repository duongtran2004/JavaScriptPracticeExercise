//display object with readingStatus property = true

let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function displayReadingBook() {
  for (let book of library) {
    if (book.readingStatus == true) {
      console.log(book);
    }
  }
}

displayReadingBook();
