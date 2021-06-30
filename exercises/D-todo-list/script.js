function todoList(todos) {
  // Write your code here...
  const contents = document.querySelector("#content");
  const ulEl = document.createElement("ul");
  for (const task of todos) {
    const liEl = document.createElement("li");
    liEl.className = "text";
    liEl.innerText = `${task.todo}`;
    ulEl.appendChild(liEl);
    function lineTrough() {
      if (liEl.style.textDecoration === "line-through") {
        liEl.style.textDecoration = "none";
      } else {
        liEl.style.textDecoration = "line-through";
      }
    }
    liEl.addEventListener("click", lineTrough);
  }


  contents.appendChild(ulEl);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);