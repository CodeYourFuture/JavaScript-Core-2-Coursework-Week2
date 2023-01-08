/*

   The "shapes" object contains keys of various shapes, with
   the number of sides they have as their value.

   Use a "for...in" loop to construct an array of shapes which have
   5 or more sides. This array has already been declared for you
   ("shapesWithMoreThanFiveSides").

   Note, you also will need to make use of some array methods you have seen
   previously.

*/

let shapes = {
  triangle: 3,
  square: 4,
  pentagon: 5,
  triacontagon: 30,
  hecatontagon: 100,
  megagon: 1000000,
};

let shapesWithMoreThanFiveSides = [];

// for (let key in shapes) {
//   let allShapes = Object.values(shapes).filter((shape) => shape >= 5);
//   return shapesWithMoreThanFiveSides.push(allShapes.key);
// }

// let allShapes = Object.values(shapes).filter((shape) => shape >= 5);
// console.log(allShapes);

// for (let key in shapes) {
//   let moreThanFiveSides = allShapes.map((shape) => Object.keys(shape));
//   console.log(moreThanFiveSides);
// }

// function getShapesWithFiveSides(shape) {
//   let allShapes = shape.filter((element) => Object.values(element > 5));
//   return shapesWithMoreThanFiveSides.push(allShapes);
// }

// for (let key in shapes) {
//   return shapesWithMoreThanFiveSides.push(getShapesWithFiveSides[key]);
// }

// for (let key in salaries) {
//   if (salaries[key] > 50000) {
//     console.log(`${key}: $${salaries[key]}`);
//   }
// }

// WRITE YOUR CODE BELOW THIS LINE

// DO NOT EDIT BELOW THIS LINE
console.log(
  `Expected output: pentagon, triacontagon, hecatontagon, megagon. Actual output: ${shapesWithMoreThanFiveSides}`
);
