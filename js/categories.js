const Container = document.querySelector(".container");
// const download = document.querySelectorAll("#download");

const categories = [
  {
    name: "Transcription",
    description: "Nombre, lettre, argent, séparateur de millier, virgule",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les 4 opérations",
    description: "+, -, x, /",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Calcul mental",
    description: "Les tables 2 à 12, arrondis, argent, complément à 10 et 100",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les pourcentages",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les fractions",
    description:
      "Notion de fraction, fractions usuels, quatre opérations, problèmes",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les unités",
    description: "l, m, g, m2, m3",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Temps, vitesse",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Transcription",
    description: "Nombre, lettre, argent, séparateur de millier, virgule",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les 4 opérations",
    description: "+, -, x, /",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Calcul mental",
    description: "Les tables 2 à 12, arrondis, argent, complément à 10 et 100",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les pourcentages",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les fractions",
    description:
      "Notion de fraction, fractions usuels, quatre opérations, problèmes",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les unités",
    description: "l, m, g, m2, m3",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Temps, vitesse",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
];

function goToPage3(i) {
  sessionStorage.setItem("PageInfos", JSON.stringify(categories[i]));
  window.location = "./page3.html";
}

function loadContent() {
  categories.forEach((cat, i) => {
    const { name, description, support } = cat;

    const catEl = document.createElement("div");
    catEl.classList.add("category");
    catEl.addEventListener("click", () => goToPage3(i));
    catEl.innerHTML = `
            <div class="download">
               <img src="./img/icons/download.svg" alt="" data-url=${support} srcset="">
            </div>
            <div class="infos">
            <div class="support">
            <a href="../img/sample.pdf" download>Support de cours PDF 2Mo</a>
  
            </div>
            <div class="exTitle open">
              <h3>${name}</h3>
              <span>${description}</span></div>
            </div>
        `;

    Container.appendChild(catEl);
  });
}

function showSupport() {
  document.querySelector(".exTitle").classList.toggle("open");
  // document.querySelector(".exTitle").style.transform = " translateX(0px)";
}

// Event Listeners
window.addEventListener("load", loadContent);
document.querySelector(".download").addEventListener("click", showSupport);
// console.log(download);
// download.addEventListener("click", showSupport);
