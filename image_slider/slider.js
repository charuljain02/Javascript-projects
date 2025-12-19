const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const img = document.getElementById("slider-image");

const images = ["image.png", "slider.jpg", "slider2.png","sizuka.jpeg","slider5.jpg"];
let index = 0;

function changeImage(newIndex) {
    index = newIndex;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    img.src = images[index];
}

previous.addEventListener("click", () => {
    changeImage(index - 1);
});

next.addEventListener("click", () => {
    changeImage(index + 1);
});

// Bonus: Auto-slide every 3 seconds
setInterval(() => {
    changeImage(index + 1);
}, 3000);
