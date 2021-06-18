/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output from Shopping Array", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  let shopping = [
    "Milk",
    "Bread",
    "Eggs",
    "A Dinosaur",
    "Cake",
    "Sugar",
    "Tea",
  ];

  target.shoppingList(shopping);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe(
    "<ul><li>Milk</li><li>Bread</li><li>Eggs</li><li>A Dinosaur</li><li>Cake</li><li>Sugar</li><li>Tea</li></ul>"
  );
});

test("Check DOM contains empty <ul> with empty input array", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  let shopping = [];

  target.shoppingList(shopping);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe("<ul></ul>");
});
