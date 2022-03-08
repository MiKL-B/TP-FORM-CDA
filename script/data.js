//api url
const api_url = "../motif.json";

//load data
async function loadJson(url) {
  const response = await fetch(url);
  let data = await response.json();
  //  console.log(data.members);
  show(data);
}

//call api
loadJson(api_url);

function show(data) {
  //data title
  let title = data.topTitle;

  //data code
  for (let i = 0; i < data.members.length; i++) {
    //create div for each code
    let div = document.createElement("div");
    div.classList.add("code");

    //create element to insert in each div
    let elem = document.createTextNode(
      `${data.members[i].name} :   ${data.members[i].title}`
    );

    //create option
    let myOptions = document.createElement("div");
    myOptions.classList.add("options");
    let listOpt;
    let elemListOpt;
    let labelOpt;
    let opt;
    let checkBoxOpt;
    for (let j = 0; j < data.members[i].options.length; j++) {
      //creation d'un element de liste
      // elemListOpt = document.createElement("li");
      labelOpt = document.createElement("label");
      opt = document.createTextNode(`${data.members[i].options[j].op_label}`);
      //creation de checkbox
      checkBoxOpt = document.createElement("input");
      checkBoxOpt.setAttribute("type", "radio");
      checkBoxOpt.setAttribute("name", "choice");
      labelOpt.setAttribute("for", "choice");
      //pour  mes options ajoute mes elements
      // myOptions.appendChild(elemListOpt);
      myOptions.appendChild(labelOpt);
      myOptions.appendChild(checkBoxOpt);
      myOptions.appendChild(opt);

      //ajout de l'option et de la checkbox a l'élément
      // elemListOpt.appendChild(checkBoxOpt);
      // elemListOpt.appendChild(opt);

      // console.log (data.members[i].options[j].op_label);
    }

    //ajoute a datas des div
    document.getElementById("datas").appendChild(div);
    //ajoute a chaque div un element
    div.appendChild(elem);
    //ajout a chaque div une div option

    div.appendChild(myOptions);
  }

  document.getElementById("data-title").innerHTML = title;
}
