console.log("hi");
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error: Please enter either rock, paper, or scissors.");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  }

  if (userChoice === "bomb") {
    return "You win! (due to the secret cheat code)";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
};
const playGame = () => {
  const userChoice = getUserChoice("rock"); // You can change this to 'rock', 'paper', or 'scissors' to test
  const computerChoice = getComputerChoice();
  console.log(`User Choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame(); // This will start the game
