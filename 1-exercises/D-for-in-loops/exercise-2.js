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

let arrFromKeys = Object.keys(shapes);
for (var x in arrFromKeys) {
  if (shapes[arrFromKeys[x]] >= 5) {
    shapesWithMoreThanFiveSides.push(arrFromKeys[x]);
  }
}

// DO NOT EDIT BELOW THIS LINE
console.log(
  `Expected output: pentagon, triacontagon, hecatontagon, megagon. Actual output: ${shapesWithMoreThanFiveSides}`
);
