let randomNumber = Math.floor(Math.random() * 100) + 1; // generate number between 1–100
let score = 10; // number of tries

const button = document.querySelector(".start");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

scoreDisplay.textContent = `Score: ${score}`;

button.addEventListener("click", () => {
  const userInput = Number(document.getElementById("userguess").value);

  if (!userInput) {
    result.textContent = "Please enter a number!";
    return;
  }

  if (userInput === randomNumber) {
    result.textContent = "🎉 Correct! You guessed it!";
    result.style.color = "green"; 
  } else if (userInput < randomNumber) {
    result.textContent = "⬆️ Too low!";
    result.style.color = "orange";
    score--;
  } else {
    result.textContent = "⬇️ Too high!";
    result.style.color = "red";
    score--;
  }

  scoreDisplay.textContent = `Score: ${score}`;

  if (score === 0) {
    result.textContent = `Game Over! The number was ${randomNumber}`;
    button.disabled = true;
  }
});

