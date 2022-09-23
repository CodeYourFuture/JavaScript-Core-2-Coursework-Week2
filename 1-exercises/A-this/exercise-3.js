/*

  Complete the "deposit" and "withdraw" methods on the "bankAccount"
  object. Each method will take 1 parameter, "amount", which will either be
  added to or subtracted from the "currentAmount".

*/

// let bankAccount = {
//   currentAmount: 100,
//   deposit: function (amount) {
//     console.log(this.currentAmount + amount);
//   },
//   withdraw: function (amount) {
//     console.log(this.currentAmount - amount);
//   },
// };

// // DO NOT EDIT BELOW THIS LINE
// bankAccount.deposit(50);
// console.log(
//   `Expected Result: 150. Actual result: ${bankAccount.currentAmount}`
// );

// bankAccount.withdraw(25);
// console.log(`Expected Result: 75. Actual result: ${bankAccount.currentAmount}`);

const londonLocations = {
  Angel: ["tube", "bus"],
  "London Bridge": ["tube", "river boat"],
  "Tower Bridge": ["tube", "bus"],
  Greenwich: ["bus", "river boat"],
};

console.log(londonLocations.Angel);
function journeyPlanner(locations, transportMode) {
  for (const key of locations) {
    return key;
  }
}

let transportMode = "bus";
console.log(journeyPlanner(londonLocations, transportMode));
