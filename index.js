const container = document.getElementById("container");

const mono = document.getElementById("mono");
const multi = document.getElementById("multi");
const rubber = document.getElementById("rubber");
const resize = document.getElementById("resize");
const clear = document.getElementById("clear");

//make initial grid
for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}

const divs = document.querySelectorAll(".square");

function Mono() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
}

function Rubber() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "white";
    });
  }
}

mono.addEventListener("click", Mono);
rubber.addEventListener("click", Rubber);
