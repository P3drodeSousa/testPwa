const Container = document.querySelector(".container");

const exercices = Array.from(Array(30).keys(), (n) => n + 1);

const category = JSON.parse(sessionStorage.getItem("PageInfos"));
const thematique = sessionStorage.getItem("Thematique");

function goToExercice(i) {
  sessionStorage.setItem("Exercice", `Exercice ${i}`);
  window.location = "./exercice.html";
}

function goBackTo(location) {
  window.location = location;
}

function loadExercice() {
  const routerHeader = document.createElement("div");
  const subHeader = document.createElement("div");

  routerHeader.classList.add("category");
  routerHeader.style.background = "red";

  subHeader.classList.add("category");
  subHeader.style.background = "green";

  routerHeader.innerHTML = `
    <div>
    <img src="./img/icons/download.svg" alt="" srcset="">
    </div>
    <div>
      <h3>${category.name}</h3>
      <span>${category.description}</span>
    </div>
  `;

  subHeader.innerHTML = `
    <div>
    </div>
    <div>
      <h3>${thematique}</h3>
    </div>
  `;

  routerHeader.addEventListener("click", () => goBackTo("./page2.html"));
  subHeader.addEventListener("click", () => goBackTo("page3.html"));

  Container.appendChild(routerHeader);
  Container.appendChild(subHeader);

  exercices.forEach((cat, i) => {
    const thematiqueEl = document.createElement("div");
    thematiqueEl.classList.add("category");

    thematiqueEl.addEventListener("click", () => goToExercice(i));
    thematiqueEl.innerHTML = `
    <div>
    <img src="./img/icons/exercice.svg" alt="" srcset="">
    </div>
    <div>
    <h3>Exercice ${cat}</h3>
    </div>
    `;

    Container.style.background = " #00E6B2";
    Container.appendChild(thematiqueEl);
  });
}

window.addEventListener("load", loadExercice);
