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

function logAliveWritersInTheirForties() {
  // write your code here
  writers.forEach((write) => {
    if (write["age"] >= 40 && write["age"] <= 49 && write["alive"] === true)
      console.log(
        `Hi, my name is ${write["firstName"]} ${write["lastName"]}. I am  ${write["age"]} years old.`
      );
  });
}

logAliveWritersInTheirForties();
