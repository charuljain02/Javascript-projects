const button = document.querySelector(".button");
const bulb = document.getElementById("bulb");
const box = document.querySelector(".animation");

let isOn = false;

button.addEventListener("click", () => {
  if (!isOn) {
    // Turn ON
    bulb.src = "bulb.lit.jpg"; // bulb image changes to ON
    button.style.transform = "translateX(80px)"; // move right
    box.style.background = "lightgreen"; // box changes color
  } else {
    // Turn OFF
    bulb.src = "bulb.off.jpg"; // bulb image changes to OFF
    button.style.transform = "translateX(0)";
    box.style.background = "rgba(139, 145, 144, 1)";
  }
  isOn = !isOn; // toggle state
});
