document.addEventListener("DOMContentLoaded", function () {

    const projectTyping = document.querySelector(".project-typing");

    if (projectTyping) {

        new Typed(".project-typing", {

            strings: [
                "Travelsy Website"
            ],

            typeSpeed: 100,
            backSpeed: 40,
            loop: true

        });

    }

});
