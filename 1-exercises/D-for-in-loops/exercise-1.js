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
// let newValue = [];
// let salaryValues = Object.values(salaries).filter((salary) => salary > 50000);
// let salaryKeys = Object.keys(salaryValues).filter(
//   (salary, key) => salary[key] > 50000
// );
// console.log(salaryKeys);

// for (let x in salaryValues) {
//   newValue = salaryValues.find((key) => salaries[key] > 50000);
//   console.log(newValue);
// }
// //   console.log(`${newValue}: $${salaryValues[x]}`);
// // }

// // for (let x of salaryValues) {
// //   console.log(x);
// // }

// COULDNT WORK WITH FOR IN LOOP SO DID IT WITH FOREACH
Object.entries(salaries).forEach(([key, value]) => {
  if (value >= 50000)
    console.log(`${key}: $${value}`);
});

// Expected Result:
// monica: $55000
// rachel: $90000
