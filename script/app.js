//toggle menu motif suivant
const angle = document.getElementById("angle");
document.getElementById("datas").style.display = "none";
angle.addEventListener("click", () => {
  document.getElementById("dynamic").classList.toggle("active");

  if (document.getElementById("dynamic").classList.contains("active")) {
    angle.innerText = "▲";
    document.getElementById("datas").style.display = "block";
  } else {
    angle.innerText = "▼";
    document.getElementById("datas").style.display = "none";
  }
});
