let randomNumber = getRandomNumber();
let inputField = document.querySelector(".inputs-Values");
let outputLabel = document.querySelector(".final-output");
let tries = 0;
const audio = new Audio("assets/game_win.mp3");

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
function guessNumber() {
  //Collect input from the user
  let guess = inputField.value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"

  if (guess && guess > 0 && guess < 101) {
    tries++;
    if (guess > randomNumber) {
      outputLabel.innerHTML = "Number is too high, try again";
    } else if (guess < randomNumber) {
      outputLabel.innerHTML = "Number is too low, try again";
    } else {
      outputLabel.innerHTML = `${randomNumber} guess is correct. Congratulations you win after ${tries} attempts!`;
      audio.play();
    }
  } else {
    outputLabel.innerHTML = "Please enter a number between 1 and 100";
  }

  inputField.value = "";
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  //Your code here
  audio.pause();
  //Reset randomNumber
  randomNumber = getRandomNumber();
  //Reset users input field
  inputField.value = "";
  //Reset tries, and triesTaken by the user
  tries = 0;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
