const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "The Map of Salt and Stars",
    author: "Jennifer Zeynab Joukhadar",
    alreadyRead: false,
  },
  {
    title: "Dietland",
    author: "Sarai Walker",
    alreadyRead: false,
  },
  {
    title: "A Place for Us",
    author: "Fatima Farheen Mirza",
    alreadyRead: false,
  },
  {
    title: "The House of Impossible Beauties",
    author: "Joseph Cassara",
    alreadyRead: false,
  },
];

// exercise 1
function logBooks() {
  for (const key in books) {
    if (books[key].alreadyRead)
    {console.log(`You've already read ${books[key].title} by ${books[key].author}`) }
    else {
        console.log(
          `You still need to read ${books[key].title} by ${books[key].author}`
        );
    }
  }
}




logBooks()

let Budgets = ([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]);

function getBudgets(peopleArray) {
    let num = 0;
    for (const key in peopleArray) {        
        num = num + peopleArray[key].budget;         
    }
    return num;
}

console.log(getBudgets(Budgets))