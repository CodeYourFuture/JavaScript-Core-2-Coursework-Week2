/*

   Use a "for...in" loop to log out the name of
   each person who earns more than 50000. The
   log should include a "$" symbol before each salary.

*/

let salaries = {
  ross: 30000,
  monica: 55000,
  rachel: 90000,
};

for (key in salaries) {
  let person = key;
  salaries[person] > 50000 && console.log(`${person}: $${salaries[person]}`);
}
// WRITE BELOW THIS LINE

// Expected Result:
// monica: $55000
// rachel: $90000
