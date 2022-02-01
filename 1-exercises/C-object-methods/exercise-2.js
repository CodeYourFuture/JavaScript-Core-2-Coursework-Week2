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

let petNamesArray = Object.values(myPets);
petNamesWithQuotes = petNamesArray.map(name => `"${name}"`)
let petNames = `[${petNamesWithQuotes.join(", ")}]`;

console.log(petNamesArray)

//brackets
//quotes
//comma & spaces

  /* todo */

  // DO NOT EDIT BELOW THIS LINE //The test converts the array into a string
  console.log(
    `Expected result: ["Rufus", "Mr Fluffykins", "Lord Voldetort", "Bugs"]. Actual result: ${petNames}`
  );
