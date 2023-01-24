/*

   The "store" array contains various items you can buy, along with their price.
   Create an array containing the names of all the things you could buy (less than
   the "money" variable").

   hint: use the array "filter" method and "map" method in a chain.

*/

let store = [
  { item: "Corn Flakes", price: 2.5 },
  { item: "Milk", price: 1.2 },
  { item: "Chocolate", price: 0.8 },
];

let money = 1.5;

let affordableItems = store.filter(item => item.price <= money);
let affordableItemsNames = affordableItems.map(item => item.item);


  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected output: Milk,Chocolate. Actual output: ${affordableItemsNames}`
  );
