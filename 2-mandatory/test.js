function f(d, k) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let day of days) {
    if (k === 1 || k % 7 === 1) {
      return days[days.indexOf(d) + 1];
    }
    if (k === 2 || k % 7 === 2) {
      return days[days.indexOf(d) + 2];
    }
    if (k === 3 || k % 7 === 3) {
      return days[days.indexOf(d) + 3];
    }
    if (k === 4 || k % 7 === 4) {
      return days[days.indexOf(d) + 4];
    }
    if (k === 5 || k % 7 === 5) {
      return days[days.indexOf(d) + 5];
    }
    if (k === 6 || k % 7 === 6) {
      return days[days.indexOf(d) + 6];
    }
    if (k === 7 || k % 7 === 0) {
      return days[days.indexOf(d)];
    }
  }
}
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//  console.log(days[days.indexOf("Mon") + 1]);
console.log(f("Sat", 23));
console.log(days.indexOf("Sat"));
