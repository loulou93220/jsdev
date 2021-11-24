//document.querySelector('h4').style.background = "yellow";//

//const baliseHTML = document.querySelector("h4");
//console.log(baliseHTML);
//baliseHTML.style.background = "yellow";

//click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p")


questionContainer.addEventListener('click', () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//mouse events
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25px , -25px)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(2) translate(-50px , -50px)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
  response.style.transform = "rotate(2deg)";
});

// le key press
const ring = () => {
  const audio = new Audio();
  audio.src = "./enter.mp3";
  audio.play();
};

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  ring();
});

//Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
})
//--------------------------------------------
// formulaire
const inputName = document.querySelector('input[type="text"]');
const select = document.qu
let pseudo = ""
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});



