// starting value of count
let count = 0;

// get saved count from localStorage (if any)
const savedCount = localStorage.getItem("count");
if (savedCount !== null) {
  count = parseInt(savedCount);
}

// select the elements
const countDisplay = document.querySelector(".count");
const increaseBtn = document.querySelector('button[type="increase"]');
const decreaseBtn = document.querySelector('button[type="decrease"]');
const resetBtn = document.querySelector('button[type="button"]');

// function to update display
function updateDisplay() {
  countDisplay.textContent = count;
  localStorage.setItem("count", count);
}

// increase count
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// decrease count
decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

// reset count
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// initial display
updateDisplay();


//page refresh ke baad bhi na hate
// let count = 0;

// // get saved count from localStorage (if any)
// const savedCount = localStorage.getItem("count");
// if (savedCount !== null) {
//   count = parseInt(savedCount);
// }
