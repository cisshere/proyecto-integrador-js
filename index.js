const navegadorMenu = document.querySelector(".menu");

const img = document.createElement('img');
    img.src = 'img/menu.png';
    img.alt = "Menu despegable";
    img.classList = 'menu-des';

    navegadorMenu.appendChild(img);

    const ul = document.createElement('ul');
    ul.id = 'nav';
    ul.classList = 'nav-list-principal';

    const elementos = ['Inicio', 'Productos', 'Beneficio', 'Contacto'];
    
    
 const menu = () => {


    for (let i= 0; i < elementos.length; i++){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = elementos[i];
        li.classList = 'nav-item';
        a.classList = 'nav-item-link';
        a.id = "link-" + elementos[i];
        a.href = "#" + elementos[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

    navegadorMenu.appendChild(ul);
}

menu();

const menuDespegable = document.querySelector(".menu-des");
const navListPrincipal = document.querySelector("#nav");

const despeglarMenu = () => {
    navListPrincipal.classList.toggle("nav-list-principal");
    navListPrincipal.classList.toggle("nav-desplegable");
}

const onResize = () => {
    if(window.innerWidth >= 1100){
        navListPrincipal.classList.remove("nav-desplegable");
        navListPrincipal.classList.add("nav-list-principal");
    }
}

 const Inicio = document.querySelector("#link-Inicio");
 const Productos = document.querySelector("#link-Productos");

const itemLink = () => {
    
    navListPrincipal.classList.remove("nav-desplegable");
    navListPrincipal.classList.add("nav-list-principal");
} 



const init = () => {
    menuDespegable.addEventListener("click",despeglarMenu);
    window.addEventListener("resize", onResize);
    Inicio.addEventListener("click", itemLink);
    Productos.addEventListener("click", itemLink);
}

init();
