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

// let salariesMoreThan50000 = Object.keys(salaries);
// salariesMoreThan50000.forEach(name => {
//   if (salaries[name] > 50000) {
//     console.log(`${name}: ${'$'}${salaries[name]}`)
//   };
// });

for (let name in salaries) {
  if (salaries[name] > 50000) {
    console.log(`${name}: ${'$'}${salaries[name]}`)
  }
}

// console.log(salariesMoreThan50000)
// Expected Result:
// monica: $55000
// rachel: $90000

