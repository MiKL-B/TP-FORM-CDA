//api url
const api_url = "../motif.json";

//load data
async function loadJson(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  show(data);
}

//appel de l'api
loadJson(api_url);

function show(data) {
  let test;
  let create = document.createElement("div");
  for (let item of data.members) {
    test += `${item.name}`;
    document.getElementById("datas").appendChild(create);
  }
  create.classList.add("create");
  create.innerText = test;
  //   document.getElementById("datas").innerText = test;
}
