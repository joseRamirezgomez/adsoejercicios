
const icon = document.getElementById(".nav-responsive");
let menuVisible = false;
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive"
        menuVisible = true;
        icon.classList.remove = 'fa-bars';
        icon.classList.add = 'fa-x';
        icon.classList.add = 'fa-solid';        
    }
}
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
