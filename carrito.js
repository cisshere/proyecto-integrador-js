let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const contenedorProductosCarrito = document.querySelector(".productos-contenedor-carrito");

// Función para agregar un producto al carrito
function addToCart(producto) {
  // Crear un nuevo elemento de lista
  
  const listItem = document.createElement('div');

  listItem.innerHTML = `      
  <div class="producto-carrito">
  <img src= ${producto.img} alt="${producto.alt}">

  <div class="datos-producto"> 
  <p>${producto.nombre}</p>
  <p>$ ${producto.precio}</p>
  <p>cantidad = ${producto.cantidad}</p>
  </div>

  </div> `
  contenedorProductosCarrito.appendChild(listItem);
}

const buyButtons = document.querySelectorAll('.btn-comprar');

buyButtons.forEach((button, indice) => {
  button.addEventListener('click', () => {
    const producto = ProductosInfo[indice];
    addToCart(producto);
  });
});