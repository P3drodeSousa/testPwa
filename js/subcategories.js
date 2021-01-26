const Container = document.querySelector(".container");

const subCategories = Array.from(Array(20).keys(), (n) => n + 1);

const category = JSON.parse(sessionStorage.getItem("PageInfos"));

function goToExercice(i) {
  sessionStorage.setItem("Thematique", `Thematique ${i}`);
  window.location = "./exerciceList.html";
}

function loadSub() {
  const routerHeader = document.createElement("div");
  routerHeader.addEventListener("click", () => window.history.back());

  routerHeader.classList.add("category");
  routerHeader.style.background = "red";
  routerHeader.innerHTML = `
  <div>
  <img src="./img/icons/download.svg" alt="" srcset="">
  </div>
  <div>
    <h3>${category.name}</h3>
    <span>${category.description}</span>
  </div>
`;

  Container.appendChild(routerHeader);

  subCategories.forEach((cat, i) => {
    const thematiqueEl = document.createElement("div");
    thematiqueEl.classList.add("category");

    thematiqueEl.addEventListener("click", () => goToExercice(i));
    thematiqueEl.innerHTML = `

                <h3>Thematique ${cat}</h3>

              `;

    Container.style.background = " #5485af";
    Container.appendChild(thematiqueEl);
  });
}

window.addEventListener("load", loadSub);
