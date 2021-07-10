/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output from People Array", () => {
  document.body.innerHTML = `<div id="content"></div>`;
  let target = require("./script.js");
  let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" },
  ];
  target.listOfNames(people);

  let content = document.querySelector("#content");
  let children = content.querySelectorAll("h1, h2");
  expect(children.length).toBe(6);

  expectTagWithText(children[0], "h1", "Chris");
  expectTagWithText(children[1], "h2", "Teacher");
  expectTagWithText(children[2], "h1", "Joanna");
  expectTagWithText(children[3], "h2", "Student");
  expectTagWithText(children[4], "h1", "Boris");
  expectTagWithText(children[5], "h2", "Prime Minister");
});

function expectTagWithText(element, expectedTagName, expectedText) {
  expect(element.tagName).toEqualCaseInsensitive(expectedTagName)
  expect(element.textContent).toEqual(expectedText);
}

test("Check DOM is empty with empty input array", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  let people = [];
  target.listOfNames(people);

  let content = document.querySelector("#content");
  let children = content.querySelectorAll("h1, h2");
  expect(children.length).toEqual(0);
});
