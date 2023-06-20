var listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductosCarrito = document.querySelector(".productos-contenedor-carrito");

function agregarAlCarrito(producto) {

  const div = document.createElement('div');
  div.classList.add("producto-carrito");

  const { img, alt, nombre, precio, cantidad} = producto

  div.innerHTML = `
  <img src= ${img} alt="${alt}">

  <div class="datos-producto"> 
  <p>${nombre}</p>
  <p>$ ${precio}</p>
  <p>cantidad = ${cantidad}</p>
  </div>

  </div> `
  contenedorProductosCarrito.appendChild(div);
}

const btnComprar = document.querySelectorAll('.btn-comprar');

btnComprar.forEach((button, indice) => {

    button.addEventListener('click', () => {
      const producto = ProductosInfo[indice];
      agregarAlCarrito(producto);
      listaCarrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(listaCarrito));
    });

  });