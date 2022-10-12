const attendances = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];
// function eligibleStudents(attendances) {
//   for (let key in attendances) {
//     if (attendances[key].attendance >= 8) {
//     }
//   }
// }

function eligibleStudents(attendances) {
  let namesOfEligibleStudents = [];
  for (let key in attendances) {
    if (attendances[key].attendance >= 8) {
      namesOfEligibleStudents.push(attendances[key].name);
    }
  }
  return namesOfEligibleStudents;
}
console.log(eligibleStudents(attendances));
