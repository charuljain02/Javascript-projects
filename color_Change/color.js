function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.querySelector(".color").style.backgroundColor = `rgb(${r},${g},${b})`;
}

const button = document.querySelector("#btn");
button.addEventListener("click", changeColor); 
