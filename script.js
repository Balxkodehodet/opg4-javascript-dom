const aiPlayer = document.getElementById("ai-player");
const pcPlayer = document.getElementById("pc-player");

const aiCombo = ["fist-ai", "paper-ai", "scissors-ai"];

// Random number between 0 and 2
let randomNrGen = Math.floor(Math.random() * aiCombo.length);

console.log(randomNrGen);
