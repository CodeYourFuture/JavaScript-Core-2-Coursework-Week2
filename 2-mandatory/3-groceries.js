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
weeklyGroceriesToBuy = Object.values(weeklyMealPlan);

function removeDuplicates(weeklyGroceriesToBuy) {
  return weeklyGroceriesToBuy.filter((item) => weeklyGroceriesToBuy.indexOf(item) === item);
}
console.log(weeklyGroceriesToBuy = `${Object.values(weeklyMealPlan)} , ${removeDuplicates(weeklyGroceriesToBuy)}`);

// weeklyGroceriesToBuy = Object.keys(weeklyMealPlan);
// console.log(weeklyMealPlan);

// weeklyMealPlan.forEach(key => {
//   if (weeklyMealPlan[key] !== weeklyMealPlan[key]);
//   console.log(`${key} ${weeklyMealPlan[key]}`);
  
// });
// let weeklyGroceriesToBuy = [];
// let groceriesToBuy = [...new Set(weeklyMealPlan)];

// function toBuy(weeklyMealPlan) {
//   for (const key in weeklyMealPlan) {
//     if (Object.hasOwnProperty.call(weeklyMealPlan, key)) {
//       weekendGroceriesToBuy = weeklyMealPlan[key];
//     }
//   }
// }
// let weeklyGroceriesToBuy = [];
// weeklyMealPlan.forEach((groceriesToBuy) => {
//   if (!weeklyGroceriesToBuy.includes(groceriesToBuy)) {
//       weeklyGroceriesToBuy.push(groceriesToBuy);
//   }
// })
// console.log(weeklyGroceriesToBuy)
// let weeklyGroceriesToBuy = [];
// let groceriesToBuy = [...new Set(weeklyMealPlan)];
// if (groceriesToBuy !== weeklyMealPlan) {
//   console.log(Object.values(groceriesToBuy))
// }
// let weeklyMealPlanKeys = Object.keys(weeklyMealPlan);

// weeklyMealPlanKeys.forEach((key) => {
//   if (weeklyMealPlan[key] !== weeklyGroceriesToBuy) {
//     console.log(`${key} ${weeklyMealPlanKeys === weeklyGroceriesToBuy}`);
//   }
// })

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = Object.values(weeklyMealPlan);
console.log(weekendGroceriesToBuy.slice(5, 7));
// let weekendGroceriesToBuy = [];
// function getLast2(weeklyMealPlan) {
//   return weekendGroceriesToBuy.call(weeklyMealPlan.length-1, weeklyMealPlan.length-1);
// }
// for (const key in weeklyMealPlan) {
//   if (Object.hasOwnProperty.call(weeklyMealPlan, key)) {
//     weekendGroceriesToBuy = weeklyMealPlan[key];  
    
//   }
// }

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
*/
// Gather daily item counts into this object
let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};
for (const key in numberOfItemsPerWeek) {
  if (Object.hasOwnProperty.call(numberOfItemsPerWeek, key)) {
    const weeklyMealPlan = numberOfItemsPerWeek[key];
    return weeklyMealPlan.length
  }
}
// function numberOfItems(weeklyMealPlan) {
//   if(Object.keys(weeklyMealPlan) ===  Object.keys(numberOfItemsPerWeek)) {
//     return Object.values(weeklyMealPlan.length) = Object.values(numberOfItemsPerWeek);
//   }
// }
// console.log(numberOfItems(numberOfItemsPerWeek));


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

test("Exercise 3 - Numer of items per week contains the correct counts", () => {
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
