/*

   Use a "for...in" loop to log out the name of
   each person who earns more than 50000. The
   log should include a "$" symbol before each salary.

*/

let salaries = {
  Ross: 30000,
  Monica: 55000,
  Rachel: 90000,
};

// WRITE BELOW THIS LINE
for (let value in salaries) {
  if (salaries[value] > 50000) {
    console.log(`${[value]}: $${salaries[value]}`);
  }
}

// Expected Result:
// monica: $55000
// rachel: $90000
