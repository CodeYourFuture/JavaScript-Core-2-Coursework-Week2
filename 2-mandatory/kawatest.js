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
for (const day in weeklyMealPlan) {
  weeklyMealPlan[day].map((dailyGroceries) => {
    if (weeklyGroceriesToBuy.indexOf(dailyGroceries) === -1)
      weeklyGroceriesToBuy.push(dailyGroceries);
  });
}

console.log(weeklyGroceriesToBuy);
