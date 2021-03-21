// function listOfColours(colourArr) {
//     let content = document.getElementById("content");
//     let selectEl = document.createElement("select");
//      content.appendChild(selectEl);
//      let pEl = document.createElement("p");
//      content.appendChild(pEl);
//   for (let colour of colourArr){
//       selectedColour = function (){
//       pEl.textContent = "You have selected: " + colourArr[selectEl.selectedIndex];
//       pEl.style.color = colourArr[selectEl.selectedIndex];
//       }
//     pEl.textContent = "You have selected: " + selectEl.selectedIndex;
//     let optionEl = document.createElement("option");
//     selectEl.appendChild(optionEl);
//     optionEl.innerHTML = colour;
//     console.log(colour);
//     selectEl.addEventListener("click", selectedColour);
//   //  console.log(selectEl.selectedIndex);
//   }
// }

 



function listOfColours(colours){
   const targetDiv = document.getElementById("content");
   console.log("This is my targetDiv",targetDiv);

    let selectEl = document.createElement("select");
    targetDiv.appendChild(selectEl);
    //parent.appendChild(child)
    let pEl = document.createElement("p");
      targetDiv.appendChild(pEl);
      pEl.textContent = "You have selected: "

    colours.forEach(colourName => {
      // console.log("This is my colour in the array",colourName);

      let colourDrop = document.createElement("option");
      colourDrop.textContent = colourName;
      selectEl.appendChild(colourDrop);

      selectColour = function(){
      pEl.style.color = selectEl.value;
      pEl.textContent = "You have selected: " + selectEl.value;
    }
    });
    //Complete final step in the click event to add the name of the 
    //selected color to the p element textContent.
    
    selectEl.addEventListener("click", selectColour);
    
 }


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
