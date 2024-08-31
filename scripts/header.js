const mainHeader = document.querySelector(".main-header");

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 0) {
        mainHeader.classList.add("scrolled-down");
        mainHeader.classList.remove("scrolled-up");
    } else {
        mainHeader.classList.remove("scrolled-down");
        mainHeader.classList.add("scrolled-up");
        setTimeout(() => {
            mainHeader.classList.remove("scrolled-up");
        }, 500);
    }
});
