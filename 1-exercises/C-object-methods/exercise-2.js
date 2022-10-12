/*

   "myPets" is an object containing many animals and 
   their names. Use the appropriate "Object." static method to
   get an array of the names of each pet in the "myPets" object.

   Assign this to the "petNames" variables declared below.

*/

let myPets = {
  dog: "Rufus",
  cat: "Mr Fluffykins",
  tortoise: "Lord Voldetort",
  rabbit: "Bugs",
};

/* 
Pseudocoding

1. use Object method to access the Values which are the names
2 use map method to create an arry of names

*/
//const a = Object.values(myPets)
let petNames = Object.values(myPets).map(element => element.split(" "));


  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected result: ["Rufus", "Mr Fluffykins", "Lord Voldetort", "Bugs"]. Actual result: ${petNames}`
  );
