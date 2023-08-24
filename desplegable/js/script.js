const icon = document.getElementById("icon");
const select = document.querySelector(".seleccion");
let menuVisible = false;

function mostrarOcultarMenu() {

    if (menuVisible) {
        document.getElementById("nav").classList = "";
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
        select.style.transform = "translateX(2px)";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive"
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-x");
        select.style.transform = "translateX(130px)";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
    select.style.transform = "translateX(2px)";
    menuVisible = false;
}
