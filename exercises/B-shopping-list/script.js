function shoppingList(arrayOfPeople) {
  // Write your code here...
  const content = document.querySelector("#content");
  const listCont = document.createElement("ul");

  for (let item of arrayOfPeople) {
    const listEl = document.createElement("li")
    listEl.innerText = item;
    listCont.appendChild(listEl);

  }
  content.append(listCont);

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
