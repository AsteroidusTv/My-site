// Header apparition handeling
const mainHeader = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
  if (window.scrollY > document.documentElement.clientHeight / 2) {
    mainHeader.classList.remove("hidden");
  } else {
    mainHeader.classList.add("hidden");
  }
});
