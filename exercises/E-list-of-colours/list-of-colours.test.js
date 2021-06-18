/* ======= TESTS - DO NOT MODIFY ===== 
There are some tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output for initial setup", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
  target.listOfColours(colours);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe(
    "<select><option>red</option><option>blue</option><option>green</option><option>yellow</option><option>pink</option><option>brown</option></select><p></p>"
  );
});

test("Check DOM contains empty <select> tag for empty content", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");

  const colours = [];
  target.listOfColours(colours);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe("<select></select><p></p>");
});
