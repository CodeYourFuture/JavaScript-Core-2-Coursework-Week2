function todoList(todos) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  // console.log('this is my target', targetDiv);

  let h1Element = document.createElement('h1')
  h1Element.innerText = 'List of Todos';

  let ulForList = document.createElement('ul');
  // console.log('This is my ul', ulForList);

  todos.forEach(element => {
    
    let liForItems = document.createElement('li');
    // console.log('This is my li', liForItems);    
    liForItems.innerText = element.todo;

    liForItems.addEventListener('click', toggleLineThrough);
    function toggleLineThrough() {
      let lineThrough = liForItems.style.getPropertyValue('text-decoration');
      
      if (lineThrough === 'line-through') {
        liForItems.style.removeProperty('text-decoration');        
      } else {
        liForItems.style.setProperty('text-decoration', 'line-through');
      }
    }
    ulForList.appendChild(liForItems);
    targetDiv.appendChild(h1Element);
    targetDiv.appendChild(ulForList);
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);