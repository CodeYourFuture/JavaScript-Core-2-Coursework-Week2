//-----part1a-----
const targetElementBlue = document.getElementById('blueBtn');
// console.log('This is my target element', targetElementBlue);

let jumbotronBlue = document.getElementsByClassName('jumbotron');
// console.log('jumbotronBlue', jumbotronBlue);

let donateBlue = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateBlue', donateBlue);

let volunteerBlue = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerBlue', volunteerBlue);

targetElementBlue.addEventListener('click', blueButtonTheme);
function blueButtonTheme() {
    jumbotronBlue[0].style.backgroundColor = '#588fbd';
    donateBlue[0].style.backgroundColor = '#ffa500';
    volunteerBlue[0].style.backgroundColor = 'black';
    volunteerBlue[0].style.color = 'white';    
};

//-----part1b-----
const targetElementOrange = document.getElementById('orangeBtn');
// console.log('This is my target element', targetElementOrange);

let jumbotronOrange = document.getElementsByClassName('jumbotron');
// console.log('jumbotronOrange', jumbotronOrange);

let donateOrange = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateOrange', donateOrange);

let volunteerOrange = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerOrange', volunteerOrange);

targetElementOrange.addEventListener('click', orangeButtonTheme);
function orangeButtonTheme() {
    jumbotronOrange[0].style.backgroundColor = '#f0ad4e';
    donateOrange[0].style.backgroundColor = '#5751fd';
    volunteerOrange[0].style.backgroundColor = '31b0d5';
    volunteerOrange[0].style.color = 'white';    
};

//-----part1c-----
const targetElementgGreen = document.getElementById('greenBtn');
// console.log('This is my target element', targetElementgGreen);

let jumbotronGreen = document.getElementsByClassName('jumbotron');
// console.log('jumbotronGreen', jumbotronGreen);

let donateGreen = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateGreen', donateGreen);

let volunteerGreen = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerGreen', volunteerGreen);

targetElementgGreen.addEventListener('click', greenButtonTheme);
function greenButtonTheme() {
    jumbotronGreen[0].style.backgroundColor = '#87ca8a';
    donateGreen[0].style.backgroundColor = '#5751fd';
    volunteerGreen[0].style.backgroundColor = '#8c9c08';
    volunteerGreen[0].style.color = 'white';    
};

//-----part2-----



const targetSubmitButton = document.querySelector('form > button')
console.log('This is my submit', targetSubmitButton);

targetElementBlue.addEventListener('click', checkFormFields);
function checkFormFields(inputtx) {
    

    // function required(inputtx) 
    //    {
         if (inputtx.value.length == 0)
          { 
             alert("message");  	
             return false; 
          }  	
          return true; 
        // } 
    // If the length of the element's string is 0 then display helper message 
    
}
    /*
function Emptyvalidation(inputtxt)
      {
 if (inputtxt.value.length == 0) 
      {
 document.inputtxt.style.background =   'Yellow'; 
      }
 else
      {
 document.inputtxt.style.background = 'White';
      }
 return error;  
      }
*/

/*
Part 2
Just below the buttons, there's a form called Register with us.
Continue working in ./js/main.js to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:
The Your name, Email and Describe yourself fields need to be non-empty (Hint: their value length has to be greater than zero)
For the Email field also check if it contains the @ character
For all the fields that invalid, it should make their background color red. IF all the fields are valid, when you click Submit it should:
Display an alert to thank you for filling out the form
Blank out (make empty) all the text fields
Important hint: In your function that handles clicks on the Submit button you will need to call event.preventDefault() to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/