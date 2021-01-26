const header = document.querySelector("header");

function resizeHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    return (header.style.height = "80px");
  }
  header.style.height = "110px";
}

window.addEventListener("scroll", resizeHeader);
