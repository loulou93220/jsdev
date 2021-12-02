//rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // Undifined

//Tableaux
let array = ["bordeau", "toulouse", "nantes"];
//console.log(array[2]);
let array2 = ["bordeau", 24, true, [1, 2], { nom: "denis" }];
//console.log(array2[4].nom);

let objet = {
  pseudo: "denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
//objet.adresse = "22 rue du code";
//console.log(objet);

let data = [
  {
    pseudo: "denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 24,
    technos: ["PHP", "React", "NodeJs"],
    admin: false,
  },
];

//console.log(data[2].pseudo[0]);
//----------------------------------------------------------------
//Les structures de controle
//----------------------------------------------------------------
//if (data[0].age > data[1].age) {
//  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
//};
//else {
//  si faux
//}
// While
//let w = 0;
//while (w < 10) {
  //w++;
 // console.log("la valeur de w est de :" + w);
//};
//Do while
//let d = 0;
//do {
//  d++;
//  console.log(d);
//} while (d < 5);
//les boucles for
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
};

for (i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i].technos);
  //document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}
//swicht
/*document.body.addEventListener('click', (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
      case "python":
        document.body.style.background = "blue";
      breack;
    default:
      null;
  }
});*/
//-----------------------------------------
//Méthode Objects
//-----------------------------------------
/*document.body.innerHTML = data
  .sort((a,b) => b.age - a.age)
.map(
  (user) =>
    `
    <div class="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age} ans</p>
    <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
    </div>
    `
)
  .join("");*/

  
//----------------
//Les dates
//----------------
let date = new Date();
let iso = date.toISOString();

// Timestamp
let timestamp = Date.parse(date);
//console.log(timestamp);
//isostring
//console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}
//console.log(dateParser(date));
//console.log(dateParser(timestamp));
//console.log(dateParser(iso));

//------------------------------------------
//Destructuring
//------------------------------------------

let moreData = {
  desVar: ["element 1", "element 2"],
};

//------------------------
//les datasets
//------------------------

const h3js = document.getElementById("javascript");
console.log(h3js);

//------------------------
//Les regex
//------------------------



