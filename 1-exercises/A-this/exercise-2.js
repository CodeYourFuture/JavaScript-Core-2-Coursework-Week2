/*

   Fill in the "changeAddress" method. This method should take one parameter called "newAddress"
   and when called should update the "currentAddress" property of the "person" object
   to be the "newAddress".

*/


let person = {
    name: "Maggie",
    age: 26,
    currentAddress: "London",
    newAddress: "Edinburgh",
    changeAddress: function(){
       console.log(this.currentAddress = this.newAddress);
    },
}
person.changeAddress();

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

// person.changeAddress("Edinburgh");
// console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);
