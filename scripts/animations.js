
const elements = document.querySelectorAll('.grid');
const projects = document.querySelector(".projects")

window.addEventListener("scroll", () =>{

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = projects.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50) {
        elements.forEach(element => {
            element.classList.add('active');
        });
    }

});


