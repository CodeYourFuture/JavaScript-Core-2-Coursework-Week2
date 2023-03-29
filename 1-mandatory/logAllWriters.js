/*
Exercise 1:
  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:
  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'teacher'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    occupation: 'engineer'
  }
];
people.forEach(names =>console.log(`Hi, my name is ${names.firstName}
${names.lastName}. I am ${names.age} years old, and work as a ${names.occupation}.`));
