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
