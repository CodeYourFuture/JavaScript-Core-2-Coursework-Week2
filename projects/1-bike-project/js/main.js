// selecting element
const bluebtn = document.querySelector("#blueBtn");
const orangebtn = document.querySelector("#orangeBtn");
const greenbtn = document.querySelector("#greenBtn");
const jumbtn = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
const volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");
const emailInput = document.getElementById("exampleInputEmail");
const textInput = document.getElementById("example-text-input");
const textArea = document.getElementById("exampleTextarea");
const submitBtn = document.querySelector(".btn.btn-primary");
// 1st part 
// adding event listener
bluebtn.addEventListener("click", selectBlue);
orangebtn.addEventListener("click", selectOrange);
greenbtn.addEventListener("click", selectGreen);
// btn functions 
function selectBlue() {
    jumbtn.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

function selectOrange() {
    jumbtn.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

function selectGreen() {
    jumbtn.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#8c9c08";
    volunteerBtn.style.color = "white";
}
// 2nd part
submitBtn.addEventListener("submit", areValid);

function areValid(e) {
    const emailIn = emailInput.value;
    const textIn = textInput.value;
    const textAr = textArea.value;
    if (
        emailIn.length !== 0 &&
        emailIn.includes("@") === true &&
        textIn.length !== 0 &&
        textAr.length !== 0
    ) {
        alert("Thank you for filling out the form!");
        emailIn = "";
        emailInput.style.background = "white";
        textIn = "";
        textInput.style.background = "white";
        textAr = "";
        textArea.style.background = "white";
    }
    if (
        emailIn.length === 0 ||
        emailIn.includes("@") === false
    ) {
        emailInput.style.background = "red";
    }
    if (textIn.length === 0) {
        textInput.style.background = "red";
    }
    if (textAr.length === 0) {
        textAr.style.background = "red";
    }

    e.preventDefault();
}