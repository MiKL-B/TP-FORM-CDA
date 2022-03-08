const myForm = document.getElementById("myForm");
const buttonSubmit = document.getElementById("button-submit");
const inputs = document.getElementsByTagName("input");
console.log(inputs);
//verif de mes inputs
function verifChamps(event) {
  event.preventDefault();

  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value === "") {
      console.log("error");
      showError(inputs[index]);
      return false;
    } else {
      console.log("envoi");
      submitForm();
      return true;
    }
  }
}

//submit
function submitForm() {
  myForm.submit();
}

//affichage erreur

function showError(input) {
  input.style.borderBottom = "2px solid tomato";
  input.classList.add("wrong-value");
}
//button submit
buttonSubmit.addEventListener("click", verifChamps);
