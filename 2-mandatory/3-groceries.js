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
// My code...
// console.log(Object.values(weeklyMealPlan));
// By reading "loop through...object" I think of for...in statement
for (let key in weeklyMealPlan) {
// and then I have to loop through the array each key has as a value
weeklyMealPlan[key].forEach(value => {
  if (weeklyGroceriesToBuy.includes(value) === false ) {
        weeklyGroceriesToBuy.push(value)
  }
  // console.log(weeklyGroceriesToBuy)

})
}
// A sign of how much unfamiliar I am with the JavaScript concepts (and programming in general)
// is that at first ('instinctively') on line 37 I had put `weeklyGroceriesToBuy += value`
// The result was a very long string instead of an array :-(


/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];
for (let key in weeklyMealPlan) {
// and then I have to loop through the array each key has as a value
weeklyMealPlan[key].forEach(value => {
  if (weekendGroceriesToBuy.includes(value) === false && (key === "saturday" || key === "sunday")) {
        weekendGroceriesToBuy.push(value)
  }
// console.log(weekendGroceriesToBuy)

})
}
// Although I tried to follow the TDD and base my code on
// the test "Exercise 2 - Weekend groceries to buy contains correct items",
// I really couldn't find any useful hints on how to approach the problem/solution


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

for (let key in weeklyMealPlan) { // Is it important if the key is in weeklyMealPlan or numberOfItemsPerWeek?
  // Actually I am a bit amazed it works
  // I would not think that it will work ok with the weeklyMealPlan...
  // *Perhaps* it works because both objects have the same keys?
  // *Definitely* I haven't understood/grasped the for (let key in objectName) concept
  // Need to restudy!
  numberOfItemsPerWeek[key] = weeklyMealPlan[key].length
console.log(weeklyMealPlan[key].length)// (value => {
 

}  //)
// }
console.log(numberOfItemsPerWeek)
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
