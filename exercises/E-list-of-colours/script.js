function listOfColours(colours) {
  // Write your code here...
  const targetDiv = document.getElementById('content');
  // console.log('This is my target div', targetDiv); 
 
  let selectElement = document.createElement('select');
  targetDiv.appendChild(selectElement);
  
  let paragraphElement = document.createElement('p');
  paragraphElement.textContent = `'You have selected: ${selectElement.value}'`;
  targetDiv.appendChild(paragraphElement);
  
  colours.forEach(element => {
    console.log('Element is pointing to ', element);
    
    let optionElement = document.createElement('option');
    optionElement.textContent = element;
    selectElement.appendChild(optionElement);
    
    
    optionElement.addEventListener('click', colorMatch);
    function colorMatch() {
      // console.log('Element is pointing to ', optionElement);
      
      paragraphElement.style.backgroundColor = 'element';
      
    }
    console.log(paragraphElement.style.color = element);
    console.log(paragraphElement);
    
  }); //(element = 0; element < colours.length; element++) {
  };
/*
function listOfColours(colours){
   const targetDiv = document.getElementById("content");
   console.log("This is my targetDiv",targetDiv);
    let selectEl = document.createElement("select");
    targetDiv.appendChild(selectEl);
    //parent.appendChild(child)
    let pEl = document.createElement("p");
      targetDiv.appendChild(pEl);
    pEl.textContent = "You have selected: " ;
    colours.forEach(colourName => {
      console.log("This is my colour in the array",colourName);
      let colourDrop = document.createElement("option");
      colourDrop.textContent = colourName;
      selectEl.appendChild(colourDrop);
      selectColour = function(){
      pEl.style.color = selectEl.value;
    }
    });
    //Complete final step in the click event to add the name of the 
    //selected color to the p element textContent.
    selectEl.addEventListener("click", selectColour);
 }




*/


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
