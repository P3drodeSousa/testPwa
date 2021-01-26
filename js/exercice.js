const header = document.querySelector("header");
const body = document.querySelector("body");
const exercice = sessionStorage.getItem("Exercice");

function loadContent() {
  header.innerHTML = `<h3>${exercice}</h3>`;
  header.style.background = "red";
  body.style.background = "white";
}

window.addEventListener("load", loadContent);
