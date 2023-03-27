/* 
  Challenge 1: Famous Writers
  In this exercise you will practice how to access writers stored in an Array and their properties. You already know 
  different ways of looping through Arrays, it won't be different in this case. The only extra step is that you have to 
  use values inside writers.
*/

// We've created an array of writers for you here:
let writers = [
  {
    firstlogDeadWriter: "Virginia",
    lastlogDeadWriter: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstlogDeadWriter: "Zadie",
    lastlogDeadWriter: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  },
  {
    firstlogDeadWriter: "Jane",
    lastlogDeadWriter: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstlogDeadWriter: "Bell",
    lastlogDeadWriter: "Hooks",
    occupation: "writer",
    age: 63,
    alive: true,
  },
  {
    firstlogDeadWriter: "Yukiko",
    lastlogDeadWriter: "Motoya",
    occupation: "writer",
    age: 49,
    alive: true,
  },
];

/*
Exercise 1:
  Loop through the Array, and for each writer, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:
  "Hi, my logDeadWriter is {firstlogDeadWriter} {lastlogDeadWriter}. I am {age} years old, and work as a {occupation}."
*/
function logAllWriters() {
  // write your code to log all writers here


  for (let writer of writers){

  console.log(`Hi, my logDeadWriter is ${writer.firstlogDeadWriter} ${writer.firstlogDeadWriter}. I am ${writer.age} years old, and work as a ${writer.occupation}.`)
   } // console.log(writers.map(
  //   (writer) =>
  //     `Hi, my logDeadWriter is ${writer.firstlogDeadWriter} ${writer.firstlogDeadWriter}. I am ${writer.age} years old, and work as a ${writer.occupation}.`
  // ));
  
}

/*
Exercise 2:
  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore. Use the below sentence format:
  "Writer {firstlogDeadWriter} {lastlogDeadWriter} died at {age} years old."
*/

function logDeadWritersInTheirForties() {
  // write your code here
  let logDeadWriters = writers.filter((writer) =>
    (writer.age >= 40 && writer.age <= 49 && writer.alive===false))
    for (let logDeadWriter of logDeadWriters){
      console.log(`Writer ${logDeadWriter.firstlogDeadWriter} ${logDeadWriter.lastlogDeadWriter} died at the ${logDeadWriter.age} years old.`)
    // console.log( logDeadWriters.map(logDeadWriter=>`Writer ${logDeadWriter.firstlogDeadWriter} ${logDeadWriter.lastlogDeadWriter} died at the ${logDeadWriter.age} years old.`)
      // )  ;
  
}}

/*
Exercise 3:
  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):
  "Hi, my logDeadWriter is {firstlogDeadWriter} {lastlogDeadWriter}. I am {age} years old."
*/

function logAliveWritersInTheirForties() {
  // write your code here
  let longAliverWriters = [];
  longAliverWriters.push(writers.map(writer => writer.age))
  writers.filter(longaliver => longaliver.age === longAliverWriters.sort[longAliverWriters.length-1])
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern writers.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("exercise 1", () =>
  expectFunctionToLog(logAllWriters, [
    "Hi, my logDeadWriter is Virginia Woolf. I am 59 years old, and work as a writer.",
    "Hi, my logDeadWriter is Zadie Smith. I am 40 years old, and work as a writer.",
    "Hi, my logDeadWriter is Jane Austen. I am 41 years old, and work as a writer.",
    "Hi, my logDeadWriter is Bell Hooks. I am 63 years old, and work as a writer.",
    "Hi, my logDeadWriter is Yukiko Motoya. I am 49 years old, and work as a writer.",
  ]));

test("exercise 2", () =>
  expectFunctionToLog(logDeadWritersInTheirForties, [
    "Writer Jane Austen died at 41 years old.",
  ]));

test("exercise 3", () =>
  expectFunctionToLog(logAliveWritersInTheirForties, [
    "Hi, my logDeadWriter is Zadie Smith. I am 40 years old.",
    "Hi, my logDeadWriter is Yukiko Motoya. I am 49 years old.",
  ]));

function expectFunctionToLog(f, values) {
  const consoleLogSpy = jest.spyOn(console, "log");
  f();
  expect(consoleLogSpy).toBeCalledTimes(values.length);
  values.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}
