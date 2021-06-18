/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

test("Check DOM resembles correct output for initial setup", () => {
  document.body.innerHTML = `<ul id="todo-list" class="list-group" />`;
  let target = require("./script.js");
  let todos = [
    { task: "Wash the dishes", completed: false },
    { task: "Do the shopping", completed: false },
  ];

  target.populateTodoList(todos);

  let content = document.querySelector("#todo-list");
  let correctOutput = `<ul class="list-group" id="todo-list"><li class="list-group-item d-flex justify-content-between align-items-center" style="text-decoration: none;">Wash the dishes<span class="badge bg-primary rounded-pill"><i class="fa fa-check" /><i class="fa fa-trash" /></span></li><li class="list-group-item d-flex justify-content-between align-items-center" style="text-decoration: none;">Do the shopping<span class="badge bg-primary rounded-pill"><i class="fa fa-check" /><i class="fa fa-trash" /></span></li></ul>`;

  expect(content).toContainHTML(correctOutput);
});
