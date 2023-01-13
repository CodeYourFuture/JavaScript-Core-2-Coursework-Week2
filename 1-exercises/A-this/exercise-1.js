/*
 
   Fill in the celebrateBirthday method such that the 
   expected age is received when running the code.

   When called, celebrateBirthday should increment the age of the person by 1.

   Note: You will need to use "this".

*/



let person = {
    name: "Adrian",
    age: 32,
    currentAddress: "London",
    celebrateBirthday() {
        return this.age + 1;
    }/* todo */
// The following is the 'traditional' (pre ES6) way to define a method
// 
//   celebrateBirthday: function() {
//         return this.age + 1;
//     }
};


// Some notes to myself :-)
// a method in an object doesn't need a colon (:)
// Instaed of puttig a key and a value (e.g):
// celebrateBirthday: function(){
//  code
// }
// we can type straightaway:
// celebrateBirthday() {
// code
// } // This applies from ES6 and on...

// console.log(Object.keys(person)) 

// DO NOT MODIFY BELOW THIS LINE
let age = person.age;
let expectedAge = age + 1;
person.celebrateBirthday()
console.log(`Expected age is ${expectedAge}, actual age is ${person.age}`)
