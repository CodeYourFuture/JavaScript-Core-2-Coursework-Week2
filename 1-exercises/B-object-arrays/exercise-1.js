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

let peopleNames = people.map((p) => p.name);
  /* todo */

  /*let peopleNames1 = []
  for (const element of people) {
    peopleNames1.push(element.name);
  }*/


  // DO NOT EDIT BELOW THIS LINE
  console.log(`Expected output: Bob,John,Elise. Actual output: ${peopleNames}`);
  //console.log(`Expected output: Bob,John,Elise. Actual output: ${peopleNames1}`);

