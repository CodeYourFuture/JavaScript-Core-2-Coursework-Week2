"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var writers = [{
  firstName: "Virginia",
  lastName: "Woolf",
  occupation: "writer",
  age: 59,
  alive: false
}, {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true
}, {
  firstName: "Jane",
  lastName: "Austen",
  occupation: "writer",
  age: 41,
  alive: false
}, {
  firstName: "Bell",
  lastName: "Hooks",
  occupation: "writer",
  age: 63,
  alive: true
}, {
  firstName: "Yukiko",
  lastName: "Motoya",
  occupation: "writer",
  age: 49,
  alive: true
}];

function logAllWriters() {
  // write your code to log all writers here
  writers.forEach(function (writer) {
    console.log("\"Hi, my name is ".concat(writer.firstName, " ").concat(writer.lastName, ". I am ").concat(writer.age, " years old, and work as a ").concat(writer.occupation, ".\""));
  });
} // console.log(logAllWriters());


function logDeadWritersInTheirForties() {
  // write your code here
  writers.filter(function (writer) {
    return writer.age > 40 && writer.age < 49 && writer.alive === false;
  }).forEach(function (writer) {
    console.log("Writer ".concat(writer.firstName, " ").concat(writer.lastName, " died at ").concat(writer.age, " years old."));
  });
} // logDeadWritersInTheirForties();


function logAliveWritersInTheirForties() {
  // write your code here
  writers.filter(function (writer) {
    return writer.alive === true && writer.age >= 40 && writer.age <= 49;
  }).forEach(function (writer) {
    console.log("Hi, my name is ".concat(writer.firstName, " ").concat(writer.lastName, ". I am ").concat(writer.age, " years old."));
  });
} // console.log(logAliveWritersInTheirForties());


var weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: []
};
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
    } // console.log(weeklyMealPlan[key]);

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
var weekendGroceriesToBuy = [];
Object.keys(weeklyMealPlan).filter(function (key) {
  return key === "saturday" || key === "sunday";
});

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
} // console.log(weekendGroceriesToBuy);


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
} // console.log(numberOfItemsPerWeek);


var friends = [{
  age: 39,
  company: "PEARLESSA",
  name: {
    first: "Vilma",
    last: "Hardy"
  },
  email: "vilma.hardy@pearlessa.info",
  colleagues: [{
    name: "Sally Nielsen",
    age: 37,
    skills: ["Data", "Strategic", "Problem"]
  }, {
    name: "Barber Wooten",
    age: 59,
    skills: ["Numeracy", "Strategic", "thinking"]
  }, {
    name: "Merle Gilbert",
    age: 44,
    skills: ["thinking", "management", "making"]
  }, {
    name: "Norton Spence",
    age: 59,
    skills: ["Interviewing", "Observation", "Motivation"]
  }, {
    name: "Angel Simon",
    age: 42,
    skills: ["Numeracy", "Strategic", "Research"]
  }]
}, {
  age: 39,
  company: "PLUTORQUE",
  name: {
    first: "Aisha",
    last: "Gentry"
  },
  email: "aisha.gentry@plutorque.net",
  colleagues: [{
    name: "Latonya Hogan",
    age: 67,
    skills: ["Problem", "Sharing", "Project"]
  }, {
    name: "Kate Sheppard",
    age: 42,
    skills: ["Scheduling", "management", "Respect"]
  }, {
    name: "Lela Espinoza",
    age: 40,
    skills: ["management", "Meeting", "Data"]
  }, {
    name: "Lindsay Larsen",
    age: 20,
    skills: ["Numeracy", "Reporting", "management"]
  }, {
    name: "Deleon Gallegos",
    age: 48,
    skills: ["Respect", "Problem", "Decision"]
  }]
}, {
  age: 36,
  company: "LINGOAGE",
  name: {
    first: "Mitchell",
    last: "Whitfield"
  },
  email: "mitchell.whitfield@lingoage.io",
  colleagues: [{
    name: "Head Fitzpatrick",
    age: 31,
    skills: ["People", "Collaboration", "data"]
  }, {
    name: "Natasha Campos",
    age: 44,
    skills: ["Respect", "Critical", "Strategic"]
  }, {
    name: "Abby Mclaughlin",
    age: 40,
    skills: ["analysis", "Planning", "Scheduling"]
  }, {
    name: "Kramer Torres",
    age: 61,
    skills: ["Observation", "Troubleshooting", "Delegating"]
  }, {
    name: "Lawrence Tillman",
    age: 42,
    skills: ["Planning", "thinking", "setting"]
  }]
}, {
  age: 24,
  company: "MELBACOR",
  name: {
    first: "Hooper",
    last: "Kirk"
  },
  email: "hooper.kirk@melbacor.me",
  colleagues: [{
    name: "Clarissa Kirby",
    age: 37,
    skills: ["management", "making", "Categorizing"]
  }, {
    name: "Contreras Ballard",
    age: 38,
    skills: ["Prioritizing", "Numeracy", "Data"]
  }, {
    name: "Wyatt Small",
    age: 29,
    skills: ["Respect", "Decision", "Sharing"]
  }, {
    name: "Mable Mcgee",
    age: 44,
    skills: ["Sharing", "Decision", "Prioritizing"]
  }, {
    name: "Henry Rodgers",
    age: 39,
    skills: ["thinking", "Communication", "management"]
  }]
}, {
  age: 40,
  company: "CIPROMOX",
  name: {
    first: "Sutton",
    last: "Quinn"
  },
  email: "sutton.quinn@cipromox.ca",
  colleagues: [{
    name: "Melanie Patterson",
    age: 40,
    skills: ["Reporting", "management", "Numeracy"]
  }, {
    name: "April Cortez",
    age: 69,
    skills: ["Observation", "People", "management"]
  }, {
    name: "Butler Frederick",
    age: 68,
    skills: ["Participation", "Data", "solving"]
  }, {
    name: "Gill Barlow",
    age: 69,
    skills: ["Data", "People", "Coordinating"]
  }, {
    name: "Rush May",
    age: 44,
    skills: ["Data", "Multi-tasking", "Research"]
  }]
}, {
  age: 21,
  company: "ENVIRE",
  name: {
    first: "Haley",
    last: "Knox"
  },
  email: "haley.knox@envire.tv",
  colleagues: [{
    name: "Nannie Reyes",
    age: 47,
    skills: ["Sharing", "management", "Time"]
  }, {
    name: "Sheena Reeves",
    age: 18,
    skills: ["making", "Strategic", "Sharing"]
  }, {
    name: "Stacie Villarreal",
    age: 34,
    skills: ["Motivation", "Coordinating", "Listening"]
  }, {
    name: "Enid Hays",
    age: 45,
    skills: ["Categorizing", "solving", "Respect"]
  }, {
    name: "Pickett Rodriguez",
    age: 27,
    skills: ["management", "Communication", "management"]
  }]
}, {
  age: 28,
  company: "PROSELY",
  name: {
    first: "Brittany",
    last: "Jacobson"
  },
  email: "brittany.jacobson@prosely.name",
  colleagues: [{
    name: "Glass Weaver",
    age: 64,
    skills: ["Listening", "making", "Flexibility"]
  }, {
    name: "Brandi Dennis",
    age: 51,
    skills: ["Scheduling", "Motivation", "Interviewing"]
  }, {
    name: "Lynch Johnston",
    age: 68,
    skills: ["data", "Decision", "Interviewing"]
  }, {
    name: "Gena Good",
    age: 54,
    skills: ["Motivation", "management", "Multi-tasking"]
  }, {
    name: "Baldwin Wyatt",
    age: 61,
    skills: ["Advising", "deadlines", "Strategic"]
  }]
}, {
  age: 36,
  company: "CAPSCREEN",
  name: {
    first: "Jana",
    last: "Harrison"
  },
  email: "jana.harrison@capscreen.co.uk",
  colleagues: [{
    name: "Stacie Villarreal",
    age: 34,
    skills: ["Motivation", "Coordinating", "Listening"]
  }, {
    name: "Dolly Hubbard",
    age: 55,
    skills: ["Coordinating", "Diplomacy", "Motivation"]
  }, {
    name: "Cunningham Shelton",
    age: 39,
    skills: ["Prioritizing", "Multi-tasking", "Diplomacy"]
  }, {
    name: "Gabriela Nunez",
    age: 31,
    skills: ["Data", "Goal", "management"]
  }, {
    name: "Castro Castaneda",
    age: 63,
    skills: ["Multi-tasking", "Reporting", "making"]
  }]
}, {
  age: 31,
  company: "POWERNET",
  name: {
    first: "Gloria",
    last: "Hall"
  },
  email: "gloria.hall@powernet.com",
  colleagues: [{
    name: "Lourdes Barr",
    age: 65,
    skills: ["Scheduling", "Delegating", "thinking"]
  }, {
    name: "Luz Newton",
    age: 21,
    skills: ["Advising", "Multi-tasking", "Sharing"]
  }, {
    name: "Kelli Holloway",
    age: 46,
    skills: ["Respect", "Collaboration", "Research"]
  }, {
    name: "Silvia Bean",
    age: 32,
    skills: ["Data", "Motivation", "Goal"]
  }, {
    name: "Cherie Ramirez",
    age: 36,
    skills: ["Advising", "Categorizing", "Communication"]
  }]
}, {
  age: 22,
  company: "POWERNET",
  name: {
    first: "Clay",
    last: "Livingston"
  },
  email: "clay.livingston@powernet.com",
  colleagues: [{
    name: "Stacie Villarreal",
    age: 34,
    skills: ["Motivation", "Coordinating", "Listening"]
  }, {
    name: "Roy Lynn",
    age: 31,
    skills: ["Project", "management", "Goal"]
  }, {
    name: "Stacey Vaughan",
    age: 29,
    skills: ["Prioritizing", "Categorizing", "Observation"]
  }, {
    name: "Bradshaw Watts",
    age: 66,
    skills: ["Decision", "Diplomacy", "Collaboration"]
  }, {
    name: "Lee Warren",
    age: 27,
    skills: ["Strategic", "Advising", "management"]
  }]
}];
var thirtyFiveOrOlder = friends.filter(function (friend) {
  return friend.age >= 35;
}).forEach(function (item) {
  return item.name.first;
});
console.log(thirtyFiveOrOlder);
var friendsWhoAreColleaguesOfStacie = [];
friends.forEach(function (friend) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = friend.colleagues[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var colleague = _step2.value;

      if (colleague.name === "Stacie Villarreal") {
        friendsWhoAreColleaguesOfStacie.push(friend.name.first + " " + friend.name.last);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}); // console.log(friendsWhoAreColleaguesOfStacie);

function getBudgets(peopleArray) {
  var totalBudget = 0;
  peopleArray.forEach(function (person) {
    person.budget === 0 ? 0 : totalBudget += person.budget;
  });
  return totalBudget;
} // console.log(
//   getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 },
//   ])
// );


function chooseMeal(mealArray) {
  if (mealArray.length === 0) {
    return "Nothing :(";
  } else {
    return mealArray.sort(function (a, b) {
      return a.price - b.price;
    })[0].name;
  }
} // console.log(chooseMeal([]));