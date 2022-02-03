let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 63,
    alive: true,
  },
  {
    firstName: "Yukiko",
    lastName: "Motoya",
    occupation: "writer",
    age: 49,
    alive: true,
  }
];

// writers.forEach(o => console.log(o.firstName));

// for (let values of writers) {
//     console.log(values.age);
// }

let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};
// let weeklyGroceriesToBuy = [];
// let arr = [];
// let arr2 = [];
// for (let ingredients in weeklyMealPlan){
//   arr.push(weeklyMealPlan[ingredients]);
// }
// arr2 = arr.flat();
// weeklyGroceriesToBuy = [...new Set(arr2)];
// console.log(arr2);
// console.log(weeklyGroceriesToBuy);

// let weekendGroceriesToBuy = [];
// let arr = [];

// for (let ingredients in weeklyMealPlan){
//   arr.push(weeklyMealPlan[ingredients])
// }
// weekendGroceriesToBuy.push(arr[5]);

// console.log(weekendGroceriesToBuy.flat());


let arr = [];
for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients])
}

let arr2 = [];
for (i = 0; i < arr.length; i++){
  for (j = 0; j < arr[i]; j++) {
  }
  arr2.push(arr[i].length);
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

for (k = 0; k = arr2.length; k++){
}

// for (value in numberOfItemsPerWeek){
// }
console.log(arr2);




// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;