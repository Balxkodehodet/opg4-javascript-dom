// A rock paper and scissors game with visuals/images
// You push the button of your choice either its rock paper or scissors,
// And the computer chooses to challenge your choice..
// See if you can win against the computer!

// Fetch the player and ai section by ID
const aiPlayer = document.getElementById("ai-player");
const pcPlayer = document.getElementById("pc-player");
// Get each image element representing paper, scissors or fist by its ID by AI
const aiPaper = document.getElementById("paper-ai");
const aiFist = document.getElementById("fist-ai");
const aiScissors = document.getElementById("scissors-ai");

// Buttons of human player by ID
const pcBtnFist = document.getElementById("btnFist");
const pcBtnPaper = document.getElementById("btnPaper");
const pcBtnScissors = document.getElementById("btnScissors");

// Get each image element representing paper, scissors or fist by its ID by PC player
const pcPaper = document.getElementById("paper-pc");
const pcFist = document.getElementById("fist-pc");
const pcScissors = document.getElementById("scissors-pc");

// Get text elements in pc and AI respectively to add text content later
const aiTxt = document.getElementById("aitext");
const pcTxt = document.getElementById("pctext");

// Store the paper fist and scissors ID names in an array
const aiCombo = ["fist-ai", "paper-ai", "scissors-ai"];

// Get welcome screen button by ID and welcome screen by ID
const welcomeScreenbtn = document.getElementById("btnWelcome");
const welcomeScreen = document.getElementById("welcomescreen");

// Beginning of aiPlayer function
function aiPlayerGame() {
  // Random number between 0 and 2
  let randomNrGen = Math.floor(Math.random() * aiCombo.length);

  console.log(randomNrGen);
  // Switch case to determine randomly if a fist, scissor or paper was chosen by the AI
  switch (aiCombo[randomNrGen]) {
    case "fist-ai":
      console.log("Fist was chosen from AI");
      aiTxt.textContent = "Fist was chosen from AI";
      aiFist.classList.remove("hidden");
      aiPaper.classList.add("hidden");
      aiScissors.classList.add("hidden");
      break;
    case "paper-ai":
      console.log("Paper was chosen from AI");
      aiTxt.textContent = "Paper was chosen from AI";
      aiPaper.classList.remove("hidden");
      aiFist.classList.add("hidden");
      aiScissors.classList.add("hidden");
      break;
    case "scissors-ai":
      console.log("Scissors was chosen from AI");
      aiTxt.textContent = "Scissors was chosen from AI";
      aiScissors.classList.remove("hidden");
      aiFist.classList.add("hidden");
      aiPaper.classList.add("hidden");
      break;
  }
  return randomNrGen; // Return the index nr of the choice taken so that it can be used in checking for who won or lost
}
// End of aiPlayer function

// Beginning of button clicks eventlisteners
welcomeScreenbtn.addEventListener("click", () =>
  welcomeScreen.classList.add("hidden")
);

pcBtnFist.addEventListener("click", () => {
  showElement(pcFist, pcPaper, pcScissors);
  const resultOfGame = aiPlayerGame();
  // AI choosing 0 = fist , 1 = paper, 2 = scissors
  switch (resultOfGame) {
    case 0:
      pcTxt.textContent = "You chose Fist, its a tie";
      break;
    case 1:
      pcTxt.textContent = "You chose Fist, Ai chose paper, you lost";
      break;
    case 2:
      pcTxt.textContent = "You chose Fist, AI chose scissors, you won!";
      break;
  }
});
pcBtnPaper.addEventListener("click", () => {
  showElement(pcPaper, pcScissors, pcFist);
  const resultOfGame = aiPlayerGame();
  // AI choosing 0 = fist , 1 = paper, 2 = scissors
  switch (resultOfGame) {
    case 0:
      pcTxt.textContent = "You chose Paper, AI chose fist, you won!";
      break;
    case 1:
      pcTxt.textContent = "You chose Paper, Ai chose paper, its a tie";
      break;
    case 2:
      pcTxt.textContent = "You chose Paper, AI chose scissors, you Lost!";
      break;
  }
});
pcBtnScissors.addEventListener("click", () => {
  showElement(pcScissors, pcFist, pcPaper);
  const resultOfGame = aiPlayerGame();
  // AI choosing 0 = fist , 1 = paper, 2 = scissors
  switch (resultOfGame) {
    case 0:
      pcTxt.textContent = "You chose Scissors, AI chose fist, you lost!";
      break;
    case 1:
      pcTxt.textContent = "You chose Scissors, Ai chose paper, You won!";
      break;
    case 2:
      pcTxt.textContent = "You chose Scissors, AI chose scissors, Its a tie!";
      break;
  }
});

function showElement(element, toRemove1, toRemove2) {
  element.classList.remove("hidden");
  toRemove1.classList.add("hidden");
  toRemove2.classList.add("hidden");
}

// Just a check to see if the index number created by the random nr generator works by calling the function
console.log("AiPLayerGame number index is: ", aiPlayerGame());
