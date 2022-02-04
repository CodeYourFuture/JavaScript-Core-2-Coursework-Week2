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
let highSalarie = Object.keys(salaries);
highSalarie.forEach((highSalarie) => {
  let salary = salaries[highSalarie];
  if (salary > 50000) {
    let message = `${[highSalarie]} : $${salary}`;
    console.log(message);
  }
});
// for (let key in salaries) {
//   if (salaries[key] > 50000)
//     console.log(Object.keys(salaries) + "$" + salaries[key]);
// }
// Expected Result:
// monica: $55000
// rachel: $90000
