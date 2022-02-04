// let writers = [
//   {
//     firstName: "Virginia",
//     lastName: "Woolf",
//     occupation: "writer",
//     age: 59,
//     alive: false,
//   },
//   {
//     firstName: "Zadie",
//     lastName: "Smith",
//     occupation: "writer",
//     age: 40,
//     alive: true,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Austen",
//     occupation: "writer",
//     age: 41,
//     alive: false,
//   },
//   {
//     firstName: "Bell",
//     lastName: "Hooks",
//     occupation: "writer",
//     age: 63,
//     alive: true,
//   },
//   {
//     firstName: "Yukiko",
//     lastName: "Motoya",
//     occupation: "writer",
//     age: 49,
//     alive: true,
//   }
// ];

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



let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

// extract arrays from object, and push to new array
let arr = [];
for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients])
}

// creates array which logs number of elements in each inner array of arr
let arr2 = [];
for (i = 0; i < arr.length; i++){
  for (j = 0; j < arr[i]; j++) {
  }
  arr2.push(arr[i].length);
}

// converts object into array of arrays
let newArr = [];
newArr.push(Object.keys(numberOfItemsPerWeek), Object.values(numberOfItemsPerWeek));

// replaces array containing initial object key's values with arr2
newArr[1] = arr2;

function transfer() {
  let box = [];
  let container = [];
  for (let i = 0; i < 7; i++){
      box.push((newArr[0][i] + ":" + " " + newArr[1][i]));     
  }
  container.push(box);
  return container.flat();
}

console.log(transfer())
// let items = "";
// let container = 0;
// for(element of arr2) {
//   container = element;
// // items += `${key}: ${element} `;
// }
//  for(key in numberOfItemsPerWeek){
//  };







// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;