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
//const ring = () => {
  //const audio = new Audio();
  //audio.src = "./enter.mp3";
  //audio.play();
//};

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

/*document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  ring();
});*/

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
//--------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = ""
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3> Pseudo : ${pseudo}</h3>
      <h4>Language préféré : ${language}</h4>`;
    } else {
    alert("Veuillez accepter les CGV");
  }
})
//-------------------------------------------------
//Load event avance que quand la page est chargé
//-------------------------------------------------
window.addEventListener("load", () => {
  console.log('document chargé');
});
//-------------------------------------------------
// ForEach
//-------------------------------------------------
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.5)";
  });
});
//--------------------------------------------------------
//addEventListener Vs onclick
//--------------------------------------------------------
//document.body.onclick = function () {
//  console.log("click !");
//};
//--------------------------------------------------------
//Stop propagation
//questionContainer.addEventListener('click', (e) => {
//  alert("test !");
//  e.stopPropagation();
//});
//---------------------------------------------------------
//BOM
//---------------------------------------------------------
//console.log(window.innerHeight);
//window.open("http://google.com", "cours js", "height=600, width=800");
//window.close();
// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});
//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("entrer votre nom");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});
// = ou +=
// Timer , compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

//let interval = setInterval(() => {
  //document.body.innerHTML +=
    //`<div class='box'><h2>Nouvelle Boite !</h2></div>`;
//}, 1000);

//document.body.addEventListener("click", () => {

  //clearInterval(interval);
//});
// Navigator
//console.log(navigator.userAgent);
//-------------------------------------------------------------
//setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
