function listOfColours(colours) {
  // Write your code here...
  const content = document.querySelector("#content");
  const selectEl = document.createElement("select");
  const pEl = document.createElement("p");
  for (const color of colours) {
    const opEl = selectEl.appendChild(document.createElement("option"));
    opEl.innerText = color;
  }
  selectEl.addEventListener("change", colorSelect);
  function colorSelect(e) {
    pEl.innerText = `You have selected: ${e.target.value}`;
    pEl.style.color = e.target.value;
  }
  content.appendChild(pEl);
  content.appendChild(selectEl);

}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
