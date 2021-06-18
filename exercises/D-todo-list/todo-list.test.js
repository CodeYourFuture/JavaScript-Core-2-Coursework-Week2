/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output for initial setup", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" },
  ];

  target.todoList(todos);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe(
    "<ul><li>wash the dishes</li><li>walk the dog</li><li>learn javascript</li><li>go shopping</li></ul>"
  );
});

test("Check DOM has empty <ul> tag when array is empty", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  const todos = [];

  target.todoList(todos);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe("<ul></ul>");
});
