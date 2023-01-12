/*
 
   Fill in the celebrateBirthday method such that the 
   expected age is recieved when running the code.

   When called, celebrateBirthday should increment the age of the person by 1.

   Note: You will need to use "this".

*/



let person = {
    name: "Adrian",
    age: 32,
    currentAddress: "London",
    celebrateBirthday:function() {
    this.age += 1;
    }
};


// DO NOT MODIFY BELOW THIS LINE
let age = person.age;
let expectedAge = age + 1;
person.celebrateBirthday()
console.log(`Expected age is ${expectedAge}, actual age is ${person.age}`)
