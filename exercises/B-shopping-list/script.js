function shoppingList(arrayOfPeople) {
  // Write your code here...
    const findElement = document.getElementById('content'); // finding my target element.

  let unorderedList = document.createElement('ul');
  unorderedList.innerText = 'Shopping List';

  shopping.forEach(shoppingItem => {
    // console.log(shoppingItem);          // what does shopping item access?
    //  create a list item for each item in the 'shopping' array
    let listItem = document.createElement('li');
    listItem.innerText = shoppingItem;
  
    unorderedList.appendChild(listItem);
  
    findElement.appendChild(unorderedList);
  });

}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
