const recupNom = document.getElementById("recupNom");
//recuperation de l'url a la quelle on garde que les parametres
const search = window.location.search.substring(1);

const recup = search.split("&");
const splite = recup[0].split("=");
// console.log("search", search);
// console.log("recup", recup);

recupNom.value = splite[1];
