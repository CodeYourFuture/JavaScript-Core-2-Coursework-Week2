let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 63,
    alive: true,
  },
  {
    firstName: "Yukiko",
    lastName: "Motoya",
    occupation: "writer",
    age: 49,
    alive: true,
  },
];

/*
Exercise 1:
  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:
  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/
function logAllWriters() {
  for (let obj in writers) {
    console.log(
      `Hi, my name is ${writers[obj].firstName} ${writers[obj].lastName}. I am ${writers[obj].age} years old, and work as a ${writers[obj].occupation}.`
    );
  }
}
logAllWriters(writers);
/*function logDeadWritersInTheirForties() {
  let midAgeWriters = writers
    .filter(
      (element) =>
        element.age >= 40 && element.age <= 49 && element.alive === false
    )
    .map((element) => element);
  for (let deadWriter in midAgeWriters) {
    console.log(
      `Writer ${midAgeWriters[deadWriter].firstName} ${midAgeWriters[deadWriter].lastName} died at ${midAgeWriters[deadWriter].age} years old.`
    );
  }
}
logDeadWritersInTheirForties(writers);
*/
/*function logAliveWritersInTheirForties(writers) {
  let midAgeWriters = writers
    .filter(
      (element) =>
        element.age >= 40 && element.age <= 49 && element.alive === true
    )
    .map((element) => element);
  for (let deadWriter in midAgeWriters) {
    console.log(
      `Hi, my name is ${midAgeWriters[deadWriter].firstName} ${midAgeWriters[deadWriter].lastName}. I am ${midAgeWriters[deadWriter].age} years old.`
    );
  }
  // write your code here
}

logAliveWritersInTheirForties(writers);*/
