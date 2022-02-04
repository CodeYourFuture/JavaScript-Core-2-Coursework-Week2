let person = {
    name: "Adrian",
    age: 32,
    currentAddress: "London",
    celebrateBirthday: function() {
        this.age = this.age + 1
    }
};


// DO NOT MODIFY BELOW THIS LINE
let age = person.age;
let expectedAge = age + 1;
person.celebrateBirthday()
console.log(`Expected age is ${expectedAge}, actual age is ${person.age}`)
