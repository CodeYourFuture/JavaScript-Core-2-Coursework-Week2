const content = document.querySelector("#content");

function updateColour(event) {
  const targetedSpan = event.target;
  const selectMenu = document.querySelector("select");
  const currentColour = selectMenu.value;
  targetedSpan.style.backgroundColor = currentColour;
}

function highlightWords(paragraph, colours) {
  const pElement = document.createElement("p");

  const selectMenu = document.createElement("select");
  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.innerText = colour;
    selectMenu.appendChild(option);
  });

  content.append(selectMenu, pElement);

  const words = paragraph.split(" ");
  words.forEach((word) => {
    const spanElement = document.createElement("span");
    spanElement.innerText = word + " ";
    spanElement.addEventListener("click", updateColour);
    pElement.appendChild(spanElement);
  });
}

/* === INSTRUCTIONS ===

Inside the index.html file you can find the code that will execute your function above.

See lines in 19-23 in index.html

*/

/* ======= TESTS - DO NOT MODIFY ===== 
You can see the changes you're making to the DOM by opening `index.html` in your browser

There are some tests in this `highlight-words.test.js` file that you can run by using the command

npm test -- --testPathPattern highlight-words.test

(Reminder: You must have run `npm install` one time before this will work!)
*/

module.exports.highlightWords = highlightWords;
