function getBudgets(peopleArray) {
  let sum = 0;

  for (let i of peopleArray) sum += this.values[i];

  return sum;
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);
