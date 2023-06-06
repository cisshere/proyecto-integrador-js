const navegadorMenu = document.querySelector(".menu");

const elementos = ['Inicio', 'Productos', 'Beneficio', 'Contacto'];
    

 const menu = () => {

    const img = document.createElement('img');
    img.src = 'img/menu.png';
    img.alt = "Menu despegable";
    img.classList = 'menu-des';

    navegadorMenu.appendChild(img);

    const ul = document.createElement('ul');
    ul.id = 'nav';
    ul.classList = 'nav-list-principal';

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
const bolsaCompra = document.querySelector(".bolsa-compra");
const carritoVacio = document.querySelector(".carrito");
const navItem = document.querySelector(".nav-item-link");

const despeglarMenu = () => {
    navListPrincipal.classList.toggle("nav-list-principal");
    navListPrincipal.classList.toggle("nav-desplegable");
    carritoVacio.classList.remove("carrito-vacio");
}

const onResize = () => {
    if(window.innerWidth >= 1100){
        navListPrincipal.classList.remove("nav-desplegable");
        navListPrincipal.classList.add("nav-list-principal");
    }
}

 const Inicio = document.querySelector("#link-Inicio");
 const Productos = document.querySelector("#link-Productos");

const removeMenuDes = () => {
    
    navListPrincipal.classList.remove("nav-desplegable");
    navListPrincipal.classList.add("nav-list-principal");
} 

const carritoCompra = () =>{
    carritoVacio.classList.toggle("carrito-vacio");
    removeMenuDes();
}

const productosContenedor = document.querySelector(".productos-contenedor");

const mostrarProductos = (listaDeProductos) => {
    productosContenedor.innerHTML = listaDeProductos.map((producto) => {
        const { img, alt, nombre, precio, tono, id} = producto

        return `

        <div class="producto">
            <img  class="img-producto" src= ${img} alt= ${alt} >
            <p class="nombre-producto"> ${nombre} </p>
            <p class="precio"> $ ${precio} </p>
            <p class="tono"> ${tono} </p>
            
            <button
            class="btn-comprar"
            data-id="${id}"
            data-name="${nombre}"
            data-precio="${precio}"
            data-img="${img}">
        Comprar
        </button>

        </div>

        `
    }).join("");
} 


const init = () => {
    menuDespegable.addEventListener("click",despeglarMenu); 
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", removeMenuDes);
    bolsaCompra.addEventListener("click", carritoCompra);
    navItem.addEventListener("click", removeMenuDes);
    mostrarProductos(ProductosInfo);
}


init();