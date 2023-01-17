/*

   Use the appropriate "Object." static method to list the keys in the "footballClubs" object.
   Assign this to the "clubNames" variable.

*/

let footballClubs = {
  chelsea_fc: "England",
  fc_barcelona: "Spain",
  ac_milan: "Italy",
};

// practicing -- to understand this more ---- let schoolTeachers = {
//   head: "ms Alton",
//   prince: "mr jons",
//   dance: "ms grace",
//   judo: "Mr gok"
// }; Let teachersNames = Object.values(schoolteachers); --Should return values that are the names of the teachers.!!

let clubNames = Object.keys(footballClubs);
  /* todo */

  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected value: chelsea_fc, fc_barcelona, ac_milan. Actual value: ${clubNames}`
  );
