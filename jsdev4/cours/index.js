// La methode fetch
//------------------------------------

/*fetch("monlien", "objet d'option").then((response) => {
  //reponse
}).catch((err) => console.log(err));*/

//fetch("data.txt")
  //.then((res) => res.text())
  //.then((data) => console.log(data));

//----------------------------------------------------------
// CRUD => Create (POST), read (GET), update (PUT), Delate (DELETE)
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "C'est moi le meilleur !",
  }),
  node: "cors",
  Credentials: "same-origin",
};
document.querySelector('form').addEventListener('submit', () => (
fetch("http://localhost:3000/posts", init2).then(() =>
  console.log("data envoyée")
)));
//-------------------------
//asynchrone
//-------------------------

setTimeout(() => {
  //console.log("test");
}, 4000);

//Promise
//fetch('monlien').then((res) => res)

// async/await
async function fetchData() {
  await fetch('monlien')
  //attend que le await soit exécuté avant de faire la suite
  executeFoncyion();
}
//ou function flécher

const fetchData2 = async () => {
  await fetch('monlien')
    //attend que le await soit exécuté avant de faire la suite
    executeFoncyion();
}

//----------------
//JSON
//________________
//Méthode .json() => méthode qui s'auto-résout en royant le body de la requete

/*fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data));
    //stringify => convertit en JSON
    let settings = JSON.stringify(data);
    //parse => tranforme json en objet js
    console.log(JSON.parse(settings));
  });*/

  //---------------
  //Web API
  //---------------
  //client storage
  //---------------
//localStorage.data = "je suis la data";
//document.body.textContent = localStorage.data;
//localStorage.removeItem("data");

const obj = {
  name: "denis",
  age: 22,
};

// il faut passer des chaines de caractéres
//localStorage.user = JSON.stringify(obj);
//console.log(JSON.parse(localStorage.user));

//sesion storage





