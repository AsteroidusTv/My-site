const body = document.body;
const header = document.querySelector("header");
const headerTitle = document.getElementById("headerTitle")
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const headerLinks = document.getElementById("headerLinks");
const navigationLink = document.querySelectorAll("#navigationLink")
const verticalLine = document.getElementById("separatorLine");

function toggleHamburgerMenu() {
  hamburgerMenu.classList.toggle('active');
  header.classList.toggle('is-hamburger-active');
  hamburgerMenu.classList.toggle('is-hamburger-active');
  headerLinks.classList.toggle('is-hamburger-active');
  navigationLink.forEach(el => el.classList.toggle('is-hamburger-active'));
  themeButton.classList.toggle('is-hamburger-active');
  body.classList.toggle('is-hamburger-active');
  verticalLine.classList.toggle('is-hamburger-active');
  headerTitle.classList.toggle('is-hamburger-active');
}

hamburgerMenu.addEventListener('click', toggleHamburgerMenu);

// Check screen width for hamburger menu
window.addEventListener('resize', () => {
  if (screen.width > 600 && header.classList.contains('is-hamburger-active')) {
    toggleHamburgerMenu();
  }
});

navigationLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (header.classList.contains('is-hamburger-active')) {
      toggleHamburgerMenu();
    }
  });
});