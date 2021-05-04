const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}

const divs = document.querySelectorAll(".square");

function changeColour(e) {
  e.target.style.backgroundColor = "black";
}

for (let j = 0; j < divs.length; j++) {
  divs[j].addEventListener("mouseenter", changeColour);
}
