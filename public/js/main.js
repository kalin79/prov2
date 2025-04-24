$(document).ready(function () {
    gsap.set(".navContainer .logoMenu", { y: -200 })

    gsap.fromTo(".navContainer", {
        opacity: 0,
    }, {
        opacity: 1,
        onComplete: () => {
            gsap.fromTo(".navContainer .logoMenu", {
                y: -200
            }, {
                y: 0
            })
        }
    }, 6);

    $(".owlCarrusel1").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: [
            '<img src="images/flecha2.png" alt="Prev" />',
            '<img src="images/flecha1.png" alt="Next" />'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    });
    $(".owlCarrusel2").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: [
            '<img src="images/flecha2.png" alt="Prev" />',
            '<img src="images/flecha1.png" alt="Next" />'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
            }
        }
    });
});

