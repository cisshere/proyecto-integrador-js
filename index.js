const menuDespegable = document.querySelector(".menu-des");
const navListPrincipal = document.querySelector(".nav-list-principal");



const despeglarMenu = () => {
    navListPrincipal.classList.toggle("nav-desplegable");
    navListPrincipal.classList.toggle("nav-list-principal");

}


const init = () => {
    menuDespegable.addEventListener("click",despeglarMenu);
}

init();