let setOne = [
//   { name: "Turkey", price: 8.99 },
//   { name: "Chicken", price: 13.99 },
//   { name: "Lobster", price: 10.99 },
];

function chooseMeal(mealArray) {
    let sortable = [];
        // if (mealArray === []) {
        //     return "Nothing :(";
        // } else {          
          for (const meal in mealArray) {
            sortable.push([mealArray[meal].name, mealArray[meal].price])
          } if (sortable.length ===1) {
            return sortable[0][0]
          } else if (sortable.length >= 2){
          sortable.sort(function(a,b) {
            return a[1] - b[1]
          })} else return "Nothing :(";
        // }    
    return sortable[1][0]
}

console.log(chooseMeal(setOne))

console.log(setOne.length)