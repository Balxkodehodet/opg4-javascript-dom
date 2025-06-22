// Fetch the player and ai section by ID
const aiPlayer = document.getElementById("ai-player");
const pcPlayer = document.getElementById("pc-player");
// get each image element representing paper, scissors or fist by its ID
const aiPaper = document.getElementById("paper-ai");
const aiFist = document.getElementById("fist-ai");
const aiScissors = document.getElementById("scissors-ai");

const aiCombo = ["fist-ai", "paper-ai", "scissors-ai"];

// Random number between 0 and 2
let randomNrGen = Math.floor(Math.random() * aiCombo.length);

console.log(randomNrGen);

switch (aiCombo[randomNrGen]) {
  case "fist-ai":
    console.log("Fist was chosen from AI");
    aiFist.classList.remove("hidden");
    break;
  case "paper-ai":
    console.log("Paper was chosen from AI");
    aiPaper.classList.remove("hidden");
    break;
  case "scissors-ai":
    console.log("Scissors was chosen from AI");
    aiScissors.classList.remove("hidden");
    break;
}
