var typed = new Typed(".typing", {

    strings: [
        "MCA Student",
        "Frontend Learner",
        "UI Designer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

});

document.addEventListener("click", function(event){

    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    const isClickInsideMenu = navbarCollapse.contains(event.target);
    const isClickOnButton = navbarToggler.contains(event.target);

    if(!isClickInsideMenu && !isClickOnButton){

        navbarCollapse.classList.remove("show");

    }

});
