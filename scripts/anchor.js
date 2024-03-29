document.querySelector(".nav1").addEventListener("click", function() {
    const projectsElement = document.getElementById("about");
    const elementPosition = projectsElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 80;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});


document.querySelector(".nav2").addEventListener("click", function() {
    const projectsElement = document.getElementById("projects");
    const elementPosition = projectsElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 80;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

