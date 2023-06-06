let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}


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
      localStorage.setItem('cart',JSON.stringify(producto));
    });

  });


  saveCart();