const root = document.documentElement;

const isMoonKey = 'isMoon';
let isMoon = true

// Themes
const themes = {
  moon: {
    iconSrc: './svgs/moon.svg',
    iconAlt: 'moon icon',
    shadowColor: '#000000bf',
    componentColor: '#000000',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    bodyBackgroundColor: '#FFFFFF',
    standartBorder: '#000000',
    pairsBackgroud: '#FFFFFF',
    impairsBackgroud: '#000000',
    scrolltopBackground: '#FFFFFF',
    arrowBackground: '#000000',
  },
  sun: {
    iconSrc: './svgs/sun.svg',
    iconAlt: 'sun icon',
    shadowColor: '#FFFFFFbf',
    componentColor: '#FFFFFF',
    backgroundColor: '#0e1f2f',
    textColor: '#FFFFFF',
    bodyBackgroundColor: '#0e1f2f',
    standartBorder: '#FFFFFF',
    pairsBackgroud: '#0e1f2f',
    impairsBackgroud: '#FFFFFF',
    scrolltopBackground: '#0e1f2f',
    arrowBackground: '#FFFFFF',
  }
};

// Functions
function setThemeMode(isMoon) {
  const theme = isMoon ? themes.moon : themes.sun;

  themeIcon.src = theme.iconSrc;
  themeIcon.alt = theme.iconAlt;

  body.style.backgroundColor = theme.bodyBackgroundColor;

  root.style.setProperty('--header-shadow-color', theme.shadowColor);
  root.style.setProperty('--header-component-color', theme.componentColor);
  root.style.setProperty('--header-background-color', theme.backgroundColor);
  root.style.setProperty('--header-text-color', theme.textColor);
  root.style.setProperty('--standard-border-color', theme.standartBorder);
  root.style.setProperty('--impairs-section-color', theme.impairsBackgroud);
  root.style.setProperty('--pairs-section-color', theme.pairsBackgroud);
  root.style.setProperty('--scrolltop-background', theme.scrolltopBackground);
  root.style.setProperty('--arrow-background', theme.arrowBackground);

  localStorage.setItem(isMoonKey, isMoon);
}

// Event Listeners
themeButton.addEventListener('click', () => {
    isMoon = !isMoon;
    setThemeMode(isMoon);
});

// Check stored theme and apply it
const storedTheme = localStorage.getItem(isMoonKey);
if (storedTheme !== null) {
  isMoon = JSON.parse(storedTheme);
}
setThemeMode(isMoon);

