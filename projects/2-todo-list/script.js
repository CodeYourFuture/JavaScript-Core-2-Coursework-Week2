/* === INSTRUCTIONS ===

Please read the README.md before starting.

Inside the index.html file you can find the code that will execute your function above.

See lines in 91-100 in index.html

*/

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Write your code to create todo list elements with completed and delete buttons here, all ToDos should display inside the "todo-list" element.
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list.
// These new ToDos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a function that checks the ToDos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedToDos() {
  // Write your code here...
}

module.exports.populateTodoList = populateTodoList;
