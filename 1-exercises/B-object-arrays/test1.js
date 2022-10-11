let store = [
  { item: "Corn Flakes", price: 2.5 },
  { item: "Milk", price: 1.2 },
  { item: "Chocolate", price: 0.8 },
];

let result = store.filter((part) => part.price < 1.5).map((part) => part.item);

let a = 9876549;
let b = a.toString().split("");
let e = b.sort().join("");
// console.log(e);

let c = b.sort((a, b) => b - a).join("");
// console.log(c);
let d = Number(
  a
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("")
);
let arr = [[[1, 2, 3]], [[[4]]]];
let r = arr.flat();

console.log(r);
