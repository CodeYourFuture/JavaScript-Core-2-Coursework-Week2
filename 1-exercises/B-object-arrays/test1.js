let store = [
  { item: "Corn Flakes", price: 2.5 },
  { item: "Milk", price: 1.2 },
  { item: "Chocolate", price: 0.8 },
];

let result = store.filter((part) => part.price < 1.5).map((part) => part.item);

console.log(result);
