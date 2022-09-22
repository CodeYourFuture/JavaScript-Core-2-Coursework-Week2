/*

   Use the appropriate "Object." static method to list the keys in the "footballClubs" object.
   Assign this to the "clubNames" variable.

*/

let footballClubs = {
  chelsea_fc: "England",
  fc_barcelona: "Spain",
  ac_milan: "Italy",
};

let clubNames = Object.keys(footballClubs);

  // DO NOT EDIT BELOW THIS LINE
  console.log(
    `Expected value: chelsea_fc, fc_barcelona, ac_milan. Actual value: ${clubNames}`
  );
