function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  arrayOfPeople.forEach(objectOfArray => {
    // console.log(objectOfArray.name);  // checking what objectOfArray.name is accessing.
    // console.log(objectOfArray.job);   // checking what objectOfArray.job is accessing.
    
    let newHeading = document.createElement('h1');    // creating a h1 objectOfArray
    newHeading.innerText = objectOfArray.name;              // add text to h1 objectOfArray
    
    let newSubHeading = document.createElement('h2'); // creating a h2 objectOfArray
    newSubHeading.innerText = objectOfArray.job;            // add text to h2 objectOfArray
    
    content.appendChild(newHeading);            // add h1 to div with id='content'
    content.appendChild(newSubHeading);         // add h2 to div with id='content'
  });
  
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
