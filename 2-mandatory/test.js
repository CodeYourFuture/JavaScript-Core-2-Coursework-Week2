let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};
let weeklyGroceriesToBuy = [];

let s = Object.values(weeklyMealPlan);
// console.log(s);
for (let i of s) {
  for (let j of i) {
    if (weeklyGroceriesToBuy.includes(j) === false) {
      weeklyGroceriesToBuy.push(j);
    }
  }
}
for (let z of s) {
  console.log(z.length);
}
let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

for (let key in numberOfItemsPerWeek) {
  numberOfItemsPerWeek[key] = weeklyMealPlan[key].length;
}
console.log(numberOfItemsPerWeek);
