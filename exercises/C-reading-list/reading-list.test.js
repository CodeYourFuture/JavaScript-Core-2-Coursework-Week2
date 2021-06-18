/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output for Reading List", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      bookCoverImage: "https://miro.medium.com/max/1049/0*CmkOVjGAnm3D0rTo",
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      bookCoverImage:
        "https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      alreadyRead: true,
      bookCoverImage:
        "https://jj09.net/wp-content/uploads/2013/07/the_pragmatic_programmer.jpg",
    },
  ];

  target.readingList(books);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe(
    '<ul><li class="book-list-item__not-read"><p></p><img src="https://miro.medium.com/max/1049/0*CmkOVjGAnm3D0rTo" class="book-image-cover"></li><li class="book-list-item__is-read"><p></p><img src="https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg" class="book-image-cover"></li><li class="book-list-item__is-read"><p></p><img src="https://jj09.net/wp-content/uploads/2013/07/the_pragmatic_programmer.jpg" class="book-image-cover"></li></ul>'
  );
});

test("Check DOM is empty with empty array", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const books = [];
  target.readingList(books);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe("");
});
