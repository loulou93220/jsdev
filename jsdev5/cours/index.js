const obj = {
  //index:value
  pseudo: "Form Scracht",
  ville: "Bordeaux"
}

//ajouter
obj.age = 24
//console.log(obj);
//supprimer
delete obj.age
//console.log(obj);
//obtenir les cles d'un objet
const keys = Object.keys(obj)
//console.log(keys);
//obtenir les valeurs
const values = Object.values(obj)
//console.log(values);

const nestedArray = Object.entries(obj);
//console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg"
}
//Fusionner objet
const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

//Empecher les modifications
//const newObj = Object.freeze(obj);// ou seal

//----------------------------
//Construire un objet
//----------------------------
//Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " Habite à " + this.ville);
  }
}
const user1 = new User('From scratch', 'bordeau');
const user2 = new User('denis', 'Nantes');
//console.log(user2.getCity());
//---------------------------------
//factory functions
//---------------------------------
function User3(pseudo, ville) {
  return {
    pseudo,
    ville
  }
}
const user4 = User3('FS', 'Nice')
console.log(user4);

//-----------------------------------
//Class
//-----------------------------------

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //Methodes
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  }
}
const user5 = new Utilisateur('samia', 'Lyon')

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
}
console.log(user5);