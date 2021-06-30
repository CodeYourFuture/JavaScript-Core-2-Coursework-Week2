function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");
  const listCont = document.createElement("ul");
  listCont.className = 'list';
  const img = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
    , "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg"
    , "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg"]
  for (const [index, book] of books.entries()) {
    const listBook = document.createElement("li");
    listBook.className = "list-items";
    const pEl = listBook.appendChild(document.createElement("p"));
    pEl.className = "ptext";
    const imgEl = listBook.appendChild(document.createElement("img"));
    imgEl.className = "img-items";
    pEl.textContent = `${book.title} - ${book.author}`;
    imgEl.src = `${img[index]}`;
    if (book.alreadyRead == true) {
      listBook.style.backgroundColor = "red";
    }
    else {
      listBook.style.backgroundColor = "green";
    }
    listCont.appendChild(listBook);
  }
  content.append(listCont);
}


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);