
$(document).ready(function () {
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
document.addEventListener("DOMContentLoaded", function () {
    // alert(2);

})
