const menuDespegable = document.querySelector(".menu-des");
const navListPrincipal = document.getElementById("nav");

const despeglarMenu = () => {
    navListPrincipal.classList.toggle("nav-list-principal");
    navListPrincipal.classList.toggle("nav-desplegable");
}

const onResize = () => {
    if(window.innerWidth >= 1050){
        navListPrincipal.classList.remove("nav-desplegable");
        navListPrincipal.classList.add("nav-list-principal");
    }
}

const init = () => {
    menuDespegable.addEventListener("click",despeglarMenu);
    window.addEventListener("resize", onResize);
}

init();