const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true
  },
  {
    title: "The Map of Salt and Stars",
    author:"Jennifer Zeynab Joukhadar",
    alreadyRead: true
  },
  {
    title: "Dietland",
    author: "Sarai Walker",
    alreadyRead: false
  },
  {
    title: "A Place for Us",
    author: "Fatima Farheen Mirza",
    alreadyRead: true
  },
  {
    title:"The House of Impossible Beauties",
    author: "Joseph Cassara",
    alreadyRead: true
  }
]
function logBooks(books) {
  for (let book of books) {
    if (book.alreadyRead) {
      console.log(`You've already read ${book.title} by ${book.author}`)
    } else {
      console.log(`You still need to read ${book.title} by ${book.author}`)
    }
    
  }
}
logBooks(books)
