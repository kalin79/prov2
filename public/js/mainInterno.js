
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
    gsap.set(".navContainer .logoMenu", { y: -200 });
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


    $(".owlCarruselInterna1").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: [
            '<img src="../images/flecha2.png" alt="Prev" />',
            '<img src="../images/flecha1.png" alt="Next" />'
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


    $(".owlCarruselInterna2").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navText: [
            '<img src="../images/flecha2.png" alt="Prev" />',
            '<img src="../images/flecha1.png" alt="Next" />'
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


function mostrarAcordion(id, idClose) {

    let tabActive = document.querySelector(`.tab-${id}`);
    let tabBtnActive = document.querySelector(`.tabBtn-${id}`);
    let tabClose = document.querySelector(`.tab-${idClose}`);
    let tabBtnClose = document.querySelector(`.tabBtn-${idClose}`);

    if (tabActive.classList.contains("active")) {
        // tabClose.classList.add("active");
        // tabBtnClose.classList.add("active");
        tabActive.classList.remove("active");
        tabBtnActive.classList.remove("active");
    } else {
        // tabClose.classList.remove("active");
        // tabBtnClose.classList.remove("active");
        tabActive.classList.add("active");
        tabBtnActive.classList.add("active");
    }
}

function mostrarAcordion2(id) {

    let tabActive = document.querySelector(`.tab-${id}`);
    let tabBtnActive = document.querySelector(`.tabBtn-${id}`);
    let CerrarTodos = document.querySelectorAll('.seccionTabsInfo .bodyTabs');
    let CerrarTodosBTN = document.querySelectorAll('.seccionTabsInfo button')

    CerrarTodos.forEach(content => {
        content.classList.remove('active');
    });

    CerrarTodosBTN.forEach(content => {
        content.classList.remove('active');
    });

    tabActive.classList.add("active");
    tabBtnActive.classList.add("active");
}



document.addEventListener("DOMContentLoaded", function () {
    // alert(2);

})
