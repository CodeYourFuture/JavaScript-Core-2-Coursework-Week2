let myObject = {
    instrument: "guitar",
    strings: 6,
    portable: true,
    sound: function() {
        // console.log("Imagine you hear the soud of a guitar")
        return "Imagine you hear the soud of a guitar";
    }
}


console.log(myObject.sound);
console.log(myObject.sound());
// In order to access an object method you have to use brackets after the method
myObject.sound();