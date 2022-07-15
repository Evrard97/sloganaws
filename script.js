const body = document.body;

function rainFall() {
  const waterDrop = document.createElement("i");

  waterDrop.classList.add("fas");
  waterDrop.classList.add("fa-tint");
  waterDrop.style.fontSize = Math.random() * 8 + "px";
  waterDrop.style.animationDuration = Math.random() * 2 + "s";
  waterDrop.style.opacity = Math.random();
  waterDrop.style.left = Math.random() * window.innerWidth + "px";

  body.appendChild(waterDrop);

  setTimeout(() => {
    waterDrop.remove();
  }, 4000);
}

setInterval(rainFall, 15);
