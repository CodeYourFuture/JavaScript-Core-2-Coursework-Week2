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

for (let name in salaries) {
  if (salaries[name] > 50000) {
    console.log(`Expected result: monica: $55000,rachel: $90000 Actual result:${name}: $${salaries[name]}`);
  }
}


// WRITE BELOW THIS LINE
// console.log(`Expected result: monica, Rachel Actual result: ${salaries[name]}`)
// Expected Result:
// monica: $55000
// rachel: $90000
