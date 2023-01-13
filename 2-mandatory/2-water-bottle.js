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

// Here is your starting point:
let bottle = {
  volume: 0,
  fillUp: function () {
    // calling this function should completely fill your bottle (volume = 100);
  },
  pour: function () {
    // calling this function should increase your bottle volume by 10 units;
  },
  drink: function () {
    // calling this function should decrease your bottle volume by 10 units;
  },
  isFull: function () {
    // this function should return true if your bottle is full;
  },
  isEmpty: function () {
    // this function should return true if your bottle is empty;
  },
};
bottle.drink()
console.log(bottle.volume);
/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];
for (const key in weeklyMealPlan) {
  for(let i in weeklyMealPlan[key]){
  weeklyGroceriesToBuy.push(weeklyMealPlan[key][i]);
}
}
console.log(weeklyGroceriesToBuy);

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];
for (const key in weeklyMealPlan) {
  if(key=="saturday"){
    for(const j in weeklyMealPlan[key]){
    weekendGroceriesToBuy.push(weeklyMealPlan[key][j])
    }
  }
  
}
console.log(weekendGroceriesToBuy);
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


/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-groceries.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("When filled up, bottle is full", () => {
  bottle.volume = 0;
  bottle.fillUp();
  expect(bottle.isFull()).toEqual(true);
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

test("When emptied, bottle is empty", () => {
  bottle.volume = 0;
  expect(bottle.isEmpty()).toEqual(true);
});

test("When partially filled, bottle is not empty", () => {
  bottle.volume = 40; // arbitrary amount
  expect(bottle.isEmpty()).toEqual(false);
});

test("When partially filled, bottle is not full", () => {
  bottle.volume = 40; // arbitrary amount
  expect(bottle.isFull()).toEqual(false);
});

test("Given a full bottle, when pour is called, then the volume does not increase", () => {
  bottle.volume = 100;
  bottle.pour();
  expect(bottle.volume).toEqual(100);
});

test("Multiple calls to drink reduce the volume correctly", () => {
  bottle.volume = 100;
  // arbitrary number of calls to drink
  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.volume).toEqual(70);
});

test("Given a full bottle, when drink has been called, then it is neither full nor empty", () => {
  bottle.volume = 100;
  // arbitrary number of calls to drink
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.isEmpty()).toEqual(false);
  expect(bottle.isFull()).toEqual(false);
});

test("Given a full bottle, when drink called 10 times, then bottle is empty", () => {
  bottle.volume = 100;
  for (var i = 0; i < 10; i++) {
    bottle.drink();
  }
  expect(bottle.isEmpty()).toEqual(true);
});

test("Given an empty bottle, when drink is called, then the volume does not decrease", () => {
  bottle.volume = 0;
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});

test("Given an empty bottle, when pour is called, then the volume increases", () => {
  bottle.volume = 0;
  bottle.pour();
  expect(bottle.volume).toEqual(10);
});

test("Given an empty bottle, calling pour then drink, then the bottle is empty", () => {
  bottle.volume = 0;
  bottle.pour();
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});
