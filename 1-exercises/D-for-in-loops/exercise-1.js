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
function salaryFilter(inputObject) {
  let earningLimit = 50000;
  let salaryMoreThanLimit = [];
  for (let salary in salaries) {
     salaries[salary] > earningLimit ? salaryMoreThanLimit.push(`${salary}:$${salaries[salary]}`) : salaryMoreThanLimit;
  }
  return salaryMoreThanLimit;
}
console.log(salaryFilter(salaries));
// Expected Result:
// monica: $55000
// rachel: $90000
