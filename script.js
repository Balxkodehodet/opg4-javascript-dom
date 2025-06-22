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

const aiTxt = document.getElementById("aitext");

// Store the paper fist and scissors ID names in an array
const aiCombo = ["fist-ai", "paper-ai", "scissors-ai"];

// Random number between 0 and 2
let randomNrGen = Math.floor(Math.random() * aiCombo.length);

console.log(randomNrGen);

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

pcBtnFist.addEventListener("click", () =>
  showElement(pcFist, pcPaper, pcScissors)
);
pcBtnPaper.addEventListener("click", () =>
  showElement(pcPaper, pcScissors, pcFist)
);
pcBtnScissors.addEventListener("click", () =>
  showElement(pcScissors, pcFist, pcPaper)
);

function showElement(element, toRemove1, toRemove2) {
  element.classList.remove("hidden");
  toRemove1.classList.add("hidden");
  toRemove2.classList.add("hidden");
}
