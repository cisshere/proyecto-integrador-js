var listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductosCarrito = document.querySelector(".productos-contenedor-carrito");

const crearProducto = (producto) => {

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

btnComprar.forEach((button, i) => {

    button.addEventListener('click', () => {
      const producto = ProductosInfo[i];

      const productoExiste = listaCarrito.find(item => item.id === producto.id);
     
      if (productoExiste) {
        productoExiste.cantidad += 1;
        console.log("Existe");
    } else {
        crearProducto(producto);
        producto.cantidad = 1;
      listaCarrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(listaCarrito));
      }
    });

  }); 


