
function listOfNames(arrayOfPeople) {
  const content = document.querySelector("#content");
  for (let person of arrayOfPeople) {
    const pName = document.createElement("h1");
    pName.innerText = person.name;
    content.appendChild(pName);
    const pJob = document.createElement("h2");
    pJob.innerText = person.job;
    content.appendChild(pJob);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

console.log(listOfNames(people));
