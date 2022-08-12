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

function ableToBuy(money) {
  if (money <= store.price) {
    return store.filter(store.item);
  }
};

let thingsICanBuy = store.map(ableToBuy);
// must come back to


// thingsICanBuy = store.filter(function(ableToBuy) {
//   return ableToBuy.price >= money;
// }).map(function(ableToBuy) {
//   return ableToBuy.item;
// });

// ableToBuy.forEach(function(item) {
//   return item;
// })



// function ableToBuy(money) {
//   if (store.price <= money);
//   return store.item;
// }

// let thingsICanBuy = store.filter.map(ableToBuy);

// let thingsICanBuy = store.filter(store).map(store);
  /* todo */

  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected output: Milk,Chocolate. Actual output: ${thingsICanBuy}`
  );
