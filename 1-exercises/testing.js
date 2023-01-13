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
for (let day in weeklyMealPlan) {
  for (let ingredient of weeklyMealPlan[day]) {
    if (weeklyGroceriesToBuy.indexOf(ingredient) === -1) {
      //returns -1 if the value is not found
      weeklyGroceriesToBuy.push(ingredient);
    }
  }
}

/*let weekendGroceriesToBuy = [];
for (let day in weeklyMealPlan) {
  if (day === "saturday" || day === "sunday") {
    for (let ingredient of weeklyMealPlan[day]) {
      if (weekendGroceriesToBuy.indexOf(ingredient) === -1) {
        //returns -1 if the value is not found
        weekendGroceriesToBuy.push(ingredient);
      }
    }
  }
}
console.log(weekendGroceriesToBuy);*/

let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};
for (let day in weeklyMealPlan) {
  numberOfItemsPerWeek[day] = weeklyMealPlan[day].length;
  //console.log(weeklyMealPlan[day].length);
  console.log(numberOfItemsPerWeek[day]);
}
//console.log(numberOfItemsPerWeek);
c; //onsole.log(weeklyMealPlan[day]);
