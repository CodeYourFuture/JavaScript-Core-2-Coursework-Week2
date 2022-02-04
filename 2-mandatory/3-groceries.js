/*
As you you can have an Array of Objects, you can also store Arrays in Objects.
In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access an Array stored inside an Object.
 - How to access a specific property of an object and set it.
You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients for your menus. It is stored in the "weeklyMealPlan" object.
Complete the exercises below.
*/

// Here is your
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];
let arr = [];
let arr2 = [];
for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients]);
}
arr2 = arr.flat();
weeklyGroceriesToBuy = [...new Set(arr2)];
console.log(weeklyGroceriesToBuy);

// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];

for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients])
}
weekendGroceriesToBuy =(arr[5]).flat();

console.log(weekendGroceriesToBuy);


/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
*/
// Gather daily item counts into this object

arr = [];
for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients])
}

arr2 = [];
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

// extract arrays from object, and push to new array
arr = [];
for (let ingredients in weeklyMealPlan){
  arr.push(weeklyMealPlan[ingredients])
}

// creates array which logs number of elements in each inner array of arr
arr2 = [];
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

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-groceries.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("Exercise 1 - Weekly groceries to buy contains correct items", () => {
  const expectedWeeklyGroceriesToBuy = [
    'Cheese',       'Eggs',
    'Tomato',       'Paprika',
    'Leek',         'Wrap',
    'Tuna',         'Canned beans',
    'Carrot',       'Aubergine',
    'Orange Juice', 'Apple',
    'Ananas',       'Black tea',
    'Lamb',         'Salt',
    'Bulgur',       'Potato',
    'Rice milk',    'Blueberries',
    'Porridge',     'Banana',
    'Cinnamon',     'Olive oil',
    'Salmon',       'Asparagus'
  ];
  expect(weeklyGroceriesToBuy).toIncludeSameMembers(expectedWeeklyGroceriesToBuy);
});

test("Exercise 2 - Weekend groceries to buy contains correct items", () => {
  const expectedWeekendGroceriesToBuy = ["Olive oil", "Potato", "Salmon", "Asparagus"];
  expect(weekendGroceriesToBuy).toIncludeSameMembers(expectedWeekendGroceriesToBuy);
});

test("Exercise 3 - Number of items per week contains the correct counts", () => {
  const expectedNumberOfItemsPerWeek = {
    monday: 5,
    tuesday: 6,
    wednesday: 4,
    thursday: 4,
    friday: 5,
    saturday: 4,
    sunday: 0,
  };
  expect(numberOfItemsPerWeek).toEqual(expectedNumberOfItemsPerWeek);
});
