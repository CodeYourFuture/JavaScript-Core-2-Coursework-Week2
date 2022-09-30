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

// WRITE BELOW THIS LINE
Object.values(salaries).filter(value => value > 50000).map(value => console.log("$" + value))
console.log(Object.values(salaries))
console.log(Object.values(salaries).filter(value => value > 50000))
// Expected Result:
// monica: $55000
// rachel: $90000
