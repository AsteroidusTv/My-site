const test = document.getElementById("test");
const cards = Array.from(document.querySelectorAll(".card"));

test.addEventListener("click", () => {
  const firstCard = cards.shift();
  cards.push(firstCard);

  cards.forEach((card, index) => {
    card.style.order = index;
    card.classList.remove("scale-card");
  });

  cards[1].classList.add("scale-card");

  cards[0].classList.add("slide-left");
  cards[2].classList.add("slide-right");

  setTimeout(() => {
    cards[0].classList.remove("slide-left");
    cards[2].classList.remove("slide-right");
  }, 500); // 500ms est la durée de l'animation
});
