const books = [
  {
    title: "Women",
    author: "Charles Bukowski",
    alreadyRead: true,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    alreadyRead: true,
  },
  {
    title: "A Woman Of Thirty",
    author: "Honoré de Balzac",
    alreadyRead: false,
  },
  {
    title: "Why We Love Women",
    author: "Mircea Cartarescu",
    alreadyRead: true,
  },
  {
    title: "The Obsession",
    author: "Helene N.",
    alreadyRead: false,
  },
];

function logBooks() {
  for (let book of books) {
    console.log(`The ${book.title} by ${book.author}`);
  }
}
logBooks(books)
