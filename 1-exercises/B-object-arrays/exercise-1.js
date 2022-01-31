/*

   The "people" array contains objects which describe a person.
   Create an array containing only the names of all the people in the array.

   hint: use the array "map" method.

*/

let people = [
  { name: "Bob", age: 30 },
  { name: "John", age: 20 },
  { name: "Elise", age: 35 },
];

let peopleNames = people.map(name => {
  for(let key in people) {
  }
  return name['name'];
})
console.log(peopleNames)
  /* todo */

  // DO NOT EDIT BELOW THIS LINE
  // console.log(`Expected output: Bob,John,Elise. Actual output: ${peopleNames}`);
