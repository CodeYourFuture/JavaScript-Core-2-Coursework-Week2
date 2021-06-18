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

  expect(content).toContainHTML(
    `<div id="content"><h1>Chris</h1><h2>Teacher</h2><h1>Joanna</h1><h2>Student</h2><h1>Boris</h1><h2>Prime Minister</h2></div>`
  );
});

test("Check DOM is empty with empty input array", () => {
  document.body.innerHTML = `<div id="content" />`;
  let target = require("./script.js");
  let people = [];
  target.listOfNames(people);

  let content = document.querySelector("#content");
  expect(content.innerHTML).toBe("");
});
