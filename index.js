const container = document.getElementById("container");

const mono = document.getElementById("mono");
const grey = document.getElementById("grey");
const multi = document.getElementById("multi");
const rubber = document.getElementById("rubber");
const shade = document.getElementById("shade");
const clear = document.getElementById("clear");
const resize = document.getElementById("resize");

//make initial grid
let size = 16;

function makeGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList = "square";
    container.appendChild(div);
  }
}

makeGrid(size);

const divs = document.querySelectorAll(".square");

function Mono() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
  mono.classList.add("glow");
}

function Grey() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      let random = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${random},${random},${random})`;
    });
  }
}

function Multi() {
  for (let j = 0; j < divs.length; j++) {
    divs[j].addEventListener("mouseenter", function (e) {
      let c1 = Math.floor(Math.random() * 256);
      let c2 = Math.floor(Math.random() * 256);
      let c3 = Math.floor(Math.random() * 256);
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

// function Resize() {
//   size = prompt("Choose a grid size (between 1-100)", 16);
//   for (let i = 0; i < size * size; i++) {
//     container.removeChild(divs[i]);
//   }

//   makeGrid(size);
// }

Mono();
mono.addEventListener("click", Mono);
grey.addEventListener("click", Grey);
multi.addEventListener("click", Multi);
rubber.addEventListener("click", Rubber);
// shade.addEventListener("click", Shade);
clear.addEventListener("click", Clear);
// resize.addEventListener("click", Resize);
