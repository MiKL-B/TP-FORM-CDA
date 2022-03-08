const myForm = document.getElementById("myForm");
const buttonSubmit = document.getElementById("button-submit");
const inputs = document.getElementsByTagName("input");
const username = document.getElementById("username");
const firstname = document.getElementById("firstname");

//verif de mes inputs
function verifChamps(event) {
  event.preventDefault();

  if (username.value === "" || firstname.value === "") {
    console.log("error");
    showError();
    return false;
  } else {
    console.log("envoi");
    submitForm();
    return true;
  }
}

//submit
function submitForm() {
  myForm.submit();
}

//affichage erreur
function showError() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.borderBottom = "2px solid tomato";
    inputs[i].classList.add("wrong-value");
  }
}
//button submit
buttonSubmit.addEventListener("click", verifChamps);
