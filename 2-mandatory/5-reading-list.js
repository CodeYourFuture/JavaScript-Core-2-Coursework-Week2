/**
The Reading List
Keep track of which books you've read and which books you want to read!
=====
Exercise 1
=====
Create an array of objects, where each object describes a book and has properties for:
- The title (a string)
- Author (a string)
- and alreadyRead (a boolean indicating if you read it yet)
Write a funciton that loops through the array of books. For each book, log the book title and book author like so:
"The Hobbit by J.R.R. Tolkien"
You should write and log at least 5 books.
You should modify the tests so that they contain the values that correspond to your books.
In this style of testing it is typical to write out as strings exactly what you expect your output to be,
without using any variables or any logic like loops, template strings or if statements.
*/
let arr = [
  "The Hobbit by J.R.R. Tolkien",
  "The Map of Salt and Stars by Jennifer Zeynab Joukhadar",
  "Dietland by Sarai Walker",
  "A Place for Us by Fatima Farheen Mirza",
  "The House of Impossible Beauties by Joseph Cassara",
];
// (function () {
//   let splitArr = [];
//   arr.forEach(e => {
//     splitArr.push(e.split("by"));
//   });

//   splitArr.forEach(e => {
//     books.push({ title: e[0], author: e[1], alreadyRead: true });
//   });
// })();
const books = [
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    alreadyRead: false,
  },
  { title: "War and Peace", author: "Leo Tolstoy", alreadyRead: true },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    alreadyRead: true,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    alreadyRead: true,
  },
];

// exercise 1
function logBooks() {
  books.forEach(e => console.log(`${e.title} by ${e.author}`));
}

/*
=====
Exercise 2
=====
Now modify the function, using an if/else statement to change the output depending on whether you have read it yet or not.
If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien',
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
You will need to modify the tests to check the correct output. If you have already learnt about red-green refactoring,
remember to practice:
- first change the test to the value that should be output,
- run the test to check that your test goes red
- now change your code to make the test pass
As an example for this exercise, you might do the following steps
- Modify the tests so that they all say 'You've already read <name> by <author>'
- Run the test (they will all fail)
- Modify your code so that it logs 'You've already read <name> by <author>'
- Run the test (they will all pass again)
- Modify your code making all the books alreadyRead:false and adding the if/else so that it logs 'You still need to read <name> by <author>'
- Run the test (they will all fail)
- Modify the tests to contain the correct list of statements (whether you've read the book or not)
- Run the test (the test will fail but there will be some successful results)
- Modify the books so that they have the correct alreadyRead value
- All tests should turn green!!
**/
function logBooks2() {
  books.forEach(e =>
    console.log(
      e.alreadyRead
        ? `You've already read ${e.title} by ${e.author}`
        : `You still need to read ${e.title} by ${e.author}`
    )
  );
}
/* ======= TESTS - DO MODIFY (!!!) =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-reading-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/
//💫💫💫💫💫💫💫💫
test("books are logged", function () {
  expectLogBooksToLog([
    "Anna Karenina by Leo Tolstoy",
    "To Kill a Mockingbird by Harper Lee",
    "War and Peace by Leo Tolstoy",
    "Crime and Punishment by Fyodor Dostoevsky",
    "The Brothers Karamazov by Fyodor Dostoevsky",
  ]);
});
//💫💫
test("books are logged", function () {
  expectLogBooksToLog2([
    "You've already read Anna Karenina by Leo Tolstoy",
    "You still need to read To Kill a Mockingbird by Harper Lee",
    "You've already read War and Peace by Leo Tolstoy",
    "You've already read Crime and Punishment by Fyodor Dostoevsky",
    "You've already read The Brothers Karamazov by Fyodor Dostoevsky",
  ]);
});

/* ======= TESTS - DO NOT MODIFY ===== */
/*
 * Assert that when the function logBooks is called, the values in the expectedValues array are logged in order via console.log.
 *
 * - If the number of calls to console.log does not match the number of elements in the array, the test will fail
 * - If the calls to console.log do not contain the strings in the expectedValue array, the test will fail
 *
 * You do not need to understand how this function works to successfully complete the exercise.
 */
function expectLogBooksToLog(expectedValues) {
  const consoleLogSpy = jest.spyOn(console, "log");
  logBooks();
  expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
  expectedValues.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}
//💫💫
function expectLogBooksToLog2(expectedValues) {
  const consoleLogSpy = jest.spyOn(console, "log");
  logBooks2();
  expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
  expectedValues.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}
