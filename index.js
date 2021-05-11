const container = document.getElementById("container");

const mono = document.getElementById("mono");
const grey = document.getElementById("grey");
const multi = document.getElementById("multi");
const rubber = document.getElementById("rubber");
const shade = document.getElementById("shade");
const clear = document.getElementById("clear");
const resize = document.getElementById("resize");

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

function Multi() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      let c1 = Math.floor(Math.random() * nums.length);
      let c2 = Math.floor(Math.random() * nums.length);
      let c3 = Math.floor(Math.random() * nums.length);
      e.target.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
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

function Clear() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].style.backgroundColor = "white";
  }
}

mono.addEventListener("click", Mono);
grey.addEventListener("click", Grey);
multi.addEventListener("click", Multi);
rubber.addEventListener("click", Rubber);
// shade.addEventListener("click", Shade);
clear.addEventListener("click", Clear);
// resize.addEventListener("click", Resize);
