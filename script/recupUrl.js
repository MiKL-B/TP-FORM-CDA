const recupNom = document.getElementById("recupNom");
const recupPrenom = document.getElementById("recupPrenom");
//recuperation de l'url a la quelle on garde que les parametres
const search = window.location.search.substring(1);
const form = document.forms[0];
const choice = document.getElementById("choice");

const recup = search.split("&");
// const splitNom = recup[0].split("=");
// const splitPrenom = recup[1].split("=");
// const splitFormation = recup[2].split("=");
// const splitHeureDebut = recup[3].split("=");
// const splitHeureFin = recup[4].split("=");
// const splitDateDebut = recup[5].split("=");
// const splitDateFin = recup[6].split("=");
// const splitNombreJour = recup[7].split("=");
// const splitChoice = recup[8].split("=");
recup.forEach((el, index) => {
  let splitted = el.split("=");
  form[index].value = splitted[1];
});

// console.log(recup);
// recupNom.value = splitNom[1];
// recupPrenom.value = splitPrenom[1];
// choice.innerText = splitChoice;
