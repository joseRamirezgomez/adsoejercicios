const icon = document.getElementById("icon");
const select = document.querySelector(".seleccion");
let menuVisible = false;

function mostrarOcultarMenu() {
    const navElement = document.getElementById("nav");
    if (menuVisible) {
        navElement.classList.remove("responsive");
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
        select.style.transform = "translateX(2px)";
        menuVisible = false;
    } else {
        navElement.classList.add("responsive");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-x");
        select.style.transform = "translateX(130px)";
        menuVisible = true;
    }
}

function seleccionar() {
    const navElement = document.getElementById("nav");
    navElement.classList.remove("responsive");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
    select.style.transform = "translateX(2px)";
    menuVisible = false;
}
