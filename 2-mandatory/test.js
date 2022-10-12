let setOne = [
  { name: "Turkey", price: 8.99 },
  { name: "Chicken", price: 13.99 },
  { name: "Lobster", price: 10.99 },
];
let setTwo = setOne.sort((a, b) => {
  return a.price - b.price;
});
console.log(setTwo);
for (const e of setTwo) {
}
