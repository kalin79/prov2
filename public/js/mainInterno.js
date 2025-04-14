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
