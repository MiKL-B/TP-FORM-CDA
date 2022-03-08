//api url
const api_url = "../motif.json";

//charge data
async function loadJson(url) {
  const response = await fetch(url);
  let data = await response.json();
  //  console.log(data.members);
  show(data);
}

//apel api
loadJson(api_url);

function show(data) {
  //data title
  let title = data.topTitle;

  //data code
  for (let i = 0; i < data.members.length; i++) {
    //creation de chacune de mes divs code
    let div = document.createElement("div");
    div.classList.add("code");
    let spanElem = document.createElement("span");
    spanElem.classList.add("span-elem");
    //création d'un element a inserer dans chaque div
    let elem = document.createTextNode(
      `${data.members[i].name} :   ${data.members[i].title}`
    );

    //create option
    let myOptions = document.createElement("div");
    myOptions.classList.add("options");

    let labelOpt;
    let opt;
    let checkBoxOpt;
    for (let j = 0; j < data.members[i].options.length; j++) {
      //création du label
      labelOpt = document.createElement("label");

      //création du noeud option
      opt = document.createTextNode(`${data.members[i].options[j].op_label}`);

      //creation de checkbox
      checkBoxOpt = document.createElement("input");

      //définition des attributs
      checkBoxOpt.setAttribute("type", "radio");
      checkBoxOpt.setAttribute("name", "choice");
      labelOpt.setAttribute("for", "choice");

      //pour  mes options ajoute mes elements
      myOptions.appendChild(labelOpt);
      myOptions.appendChild(checkBoxOpt);
      myOptions.appendChild(opt);

      // console.log (data.members[i].options[j].op_label);
    }

    //ajoute a datas mes div (code)
    document.getElementById("datas").appendChild(div);
    spanElem.appendChild(elem);
    //ajoute a chaque div un element
    div.appendChild(spanElem);

    //ajout a chaque div une div option
    div.appendChild(myOptions);
  }

  document.getElementById("data-title").innerHTML = title;
}
