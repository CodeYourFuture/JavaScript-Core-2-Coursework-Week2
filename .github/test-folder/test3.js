const attendances = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];

function eligibleStudents(attendances) {
    let goodStudents = [];
    for (const student in attendances) {
        if (attendances[student].attendance >= 8) {
            goodStudents.push(attendances[student].name)
        }
    }
    return goodStudents;
}

console.log(eligibleStudents(attendances))