/*

   Fill in the "highScoreKeys" and "highScoreValues"
   variables, using 2 different "Object." static methods.

*/

let highScores = {
  34: ["Sergi", "Frank"],
  55: ["Alistair, Mary"],
  89: ["Hannah"],
  100: ["David"],
};

let highScoreKeys = Object.keys(highScores); /* todo */
let highScoreValues = Object.values(highScores); /* todo */

// DO NOT EDIT BELOW THIS LINE
console.log(`Expected keys: 34, 55, 89, 100, Actual keys: ${highScoreKeys}`);
console.log(
  `Expected values: Sergi, Frank, Alistair, Mary, Hannah, David. Actual values: ${highScoreValues}`
);
