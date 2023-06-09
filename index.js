const navegadorMenu = document.querySelector(".menu");

const elementos = ["Inicio", "Productos", "Beneficios", "Contacto"];

const menu = () => {
  const img = document.createElement("img");
  img.src = "img/menu.png";
  img.alt = "Menu despegable";
  img.classList = "menu-des";

  navegadorMenu.appendChild(img);

  const ul = document.createElement("ul");
  ul.id = "nav";
  ul.classList = "nav-list-principal";

  for (let i = 0; i < elementos.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = elementos[i];
    li.classList = "nav-item";
    a.classList = "nav-item-link";
    a.id = "link-" + elementos[i];
    a.href = "#" + elementos[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  navegadorMenu.appendChild(ul);
};

menu();

const menuDespegable = document.querySelector(".menu-des");
const navListPrincipal = document.querySelector("#nav");
const bolsaCompra = document.querySelector(".bolsa-compra");
const carritoVacio = document.querySelector(".carrito");
const navItem = document.querySelector(".nav-item-link");

const despeglarMenu = () => {
  navListPrincipal.classList.toggle("nav-list-principal");
  navListPrincipal.classList.toggle("nav-desplegable");
  carritoVacio.classList.remove("lista-productos-carrito");
};

const onResize = () => {
  if (window.innerWidth >= 1100) {
    navListPrincipal.classList.remove("nav-desplegable");
    navListPrincipal.classList.add("nav-list-principal");
  }
};

const Inicio = document.querySelector("#link-Inicio");
const Productos = document.querySelector("#link-Productos");
const Beneficios = document.querySelector("#link-Beneficios");
const Contacto = document.querySelector("#link-Contacto");

const removeListaProductosCarrito = () => {
  carritoVacio.classList.remove("lista-productos-carrito");
};

const removeMenuDes = () => {
  navListPrincipal.classList.remove("nav-desplegable");
  navListPrincipal.classList.add("nav-list-principal");
};

const carritoCompra = () => {
  carritoVacio.classList.toggle("lista-productos-carrito");
  removeMenuDes();
};

const productosContenedor = document.querySelector(".productos-contenedor");

const mostrarProductos = (listaDeProductos) => {
  productosContenedor.innerHTML = listaDeProductos
    .map((producto) => {
      const { img, alt, nombre, precio, tono, id } = producto;
      return `

        <div class="producto">
            <img  class="img-producto" src= ${img} alt= ${alt} >
            <p class="nombre-producto"> ${nombre} </p>
            <p class="precio"> $ ${precio} </p>
            <p class="tono"> ${tono} </p>
        
            <button class="btn-comprar" onclick="comprar(${id})">Comprar</button>
        </div>
        `;
    })
    .join("");
};

const comprar = (id) => {
  const productoAComprar = productosInfo.find((producto) => producto.id === id);

  let indice;
  listaCarrito.forEach((item, index) => {
    if (item.id === productoAComprar.id) {
      indice = index;
    }
  });

  if (indice !== undefined) {
    listaCarrito[indice].cantidad += 1;
  } else {
    productoAComprar.cantidad = 1;
    listaCarrito.push(productoAComprar);
  }

  Toastify({
    text: "Se agrego un producto al carrito",
    className: "info",
    duration: 1500,
    gravity: "bottom",
    close: true,
    style: {
      background: "#4CD35A",
    },
  }).showToast();

  mostrarTotalCarrito();
  guardarCarritoEnLocalStorage();
  mostrarCarrito();
};

const init = () => {
  menuDespegable.addEventListener("click", despeglarMenu);
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", removeMenuDes);
  window.addEventListener("scroll", removeListaProductosCarrito);
  bolsaCompra.addEventListener("click", carritoCompra);
  navItem.addEventListener("click", removeMenuDes);
  mostrarProductos(productosInfo);
};

init();
