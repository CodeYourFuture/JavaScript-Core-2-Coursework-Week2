"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
var weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: []
};
/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
*/
// Gather all week item names into this array

var weeklyGroceriesToBuy = [];
Object.keys(weeklyMealPlan).forEach(function (key) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = weeklyMealPlan[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (!weeklyGroceriesToBuy.includes(item)) {
        weeklyGroceriesToBuy.push(item);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array

var weekendGroceriesToBuy = [];

for (var _i = 0, _Object$entries = Object.entries(weeklyMealPlan); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      _key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  if (_key === "saturday" || _key === "sunday") {
    value.forEach(function (item) {
      if (!weekendGroceriesToBuy.includes(item)) {
        weekendGroceriesToBuy.push(item);
      }
    });
  }
}
/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
*/
// Gather daily item counts into this object


var numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0
};

for (var key in weeklyMealPlan) {
  numberOfItemsPerWeek[key] = weeklyMealPlan[key].length;
}
/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 3-groceries.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/


test("Exercise 1 - Weekly groceries to buy contains correct items", function () {
  var expectedWeeklyGroceriesToBuy = ["Cheese", "Eggs", "Tomato", "Paprika", "Leek", "Wrap", "Tuna", "Canned beans", "Carrot", "Aubergine", "Orange Juice", "Apple", "Ananas", "Black tea", "Lamb", "Salt", "Bulgur", "Potato", "Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon", "Olive oil", "Salmon", "Asparagus"];
  expect(weeklyGroceriesToBuy).toIncludeSameMembers(expectedWeeklyGroceriesToBuy);
});
test("Exercise 2 - Weekend groceries to buy contains correct items", function () {
  var expectedWeekendGroceriesToBuy = ["Olive oil", "Potato", "Salmon", "Asparagus"];
  expect(weekendGroceriesToBuy).toIncludeSameMembers(expectedWeekendGroceriesToBuy);
});
test("Exercise 3 - Numer of items per week contains the correct counts", function () {
  var expectedNumberOfItemsPerWeek = {
    monday: 5,
    tuesday: 6,
    wednesday: 4,
    thursday: 4,
    friday: 5,
    saturday: 4,
    sunday: 0
  };
  expect(numberOfItemsPerWeek).toEqual(expectedNumberOfItemsPerWeek);
});