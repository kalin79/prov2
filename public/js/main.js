const video = document.getElementById('miVideo');
video.addEventListener('ended', () => {
    video.pause();
    video.currentTime = video.duration; // asegúrate de que se quede en el último frame
});

$(document).ready(function () {

    const viewMenu = document.querySelector('.hambMenu');
    const btnCloseMenu = document.querySelector('.btnClose');
    const mantoMenu = document.querySelector('.mainMobileContainer');

    const headerBtnContainer = document.querySelectorAll('.headerBtnContainer');

    headerBtnContainer.forEach(div => {
        div.addEventListener('click', () => {
            const submenu = div.nextElementSibling;
            // Verificar si es realmente un .submenuContainer
            if (submenu && submenu.classList.contains('submenuContainer')) {
                // Alternar clase para mostrar u ocultar
                submenu.classList.toggle('active');
            }
        });
    });

    viewMenu.addEventListener('click', () => {
        mantoMenu.classList.toggle('active');
    })

    btnCloseMenu.addEventListener('click', () => {
        mantoMenu.classList.toggle('active');
    })


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

