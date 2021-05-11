const container = document.getElementById("container");

const mono = document.getElementById("mono");
const grey = document.getElementById("grey");
const multi = document.getElementById("multi");
const rubber = document.getElementById("rubber");
const resize = document.getElementById("resize");
const clear = document.getElementById("clear");

//make initial grid
for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}

const divs = document.querySelectorAll(".square");

let nums = [];

for (let i = 0; i < 256; i++) {
  nums.push(i);
}

function Mono() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
}

function Grey() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      let random = Math.floor(Math.random() * nums.length);
      e.target.style.backgroundColor = `rgb(${random},${random},${random})`;
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
grey.addEventListener("click", Grey);
rubber.addEventListener("click", Rubber);
