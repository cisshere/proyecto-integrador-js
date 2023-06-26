var listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductosCarrito = document.querySelector(".productos-contenedor-carrito");
const mensajeCarritoVacio = document.getElementById('mensaje-carrito-vacio');


const restarCantidad = (producto) => {
  if (producto.cantidad > 1) {
    producto.cantidad -= 1;
    mostrarCarrito();
  } 
  localStorage.setItem("carrito", JSON.stringify(listaCarrito));
};

const sumarCantidad = (producto) => {
  producto.cantidad += 1;
  mostrarCarrito();
  localStorage.setItem("carrito", JSON.stringify(listaCarrito));
};



const mostrarCarrito = () => {
  contenedorProductosCarrito.innerHTML = "";

  listaCarrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto-carrito");

    const { img, alt, nombre, precio, cantidad } = producto;

    div.innerHTML = `
      <img class="prod-carrito-img" src=${img} alt="${alt}">
      <div class="datos-producto"> 
        <p class="producto-nombre">${nombre}</p>
        <p>$ ${precio}</p>

        <div class="cambiarCantidad">
          <button class="btn-restar"> - </button>
          <button class="btn-tacho-resto">
           <img class="tacho-resto" src="img/tacho.png" alt="tacho"> 
          </button>
          <p> ${cantidad}</p>
          <button class="btn-sumar"> + </button>
        </div>

      </div>
      
      <div>
        <button class="btn-tacho">
         <img class="tacho" src="img/tacho.png" alt="tacho"> </button>
        </div>
        `;
    contenedorProductosCarrito.appendChild(div);

    const btnRestar = div.querySelector(".btn-restar");
    const btnSumar = div.querySelector(".btn-sumar");
    const btnTachoResto = div.querySelector(".btn-tacho-resto");


    btnRestar.addEventListener("click", () => {
      restarCantidad(producto);
    });

    btnSumar.addEventListener("click", () => {
      sumarCantidad(producto);
    });

    if (producto.cantidad === 1) {
      btnRestar.style.display = "none";
      btnTachoResto.style.display = "flex";
    } else {
      btnRestar.style.display = "flex";
      btnTachoResto.style.display = "none";
    }


  });

  if (listaCarrito.length === 0) {
    mensajeCarritoVacio.style.display = "block";
  } else {
    mensajeCarritoVacio.style.display = "none";
  }

};

const btnComprar = document.querySelectorAll(".btn-comprar");

btnComprar.forEach((button, i) => {
  button.addEventListener("click", () => {
    const producto = productosInfo[i];

    let indice;
    listaCarrito.forEach((item, index) => {
      if(item.id === producto.id){
        indice = index;
      }
    });

    if (indice !== undefined) {
      console.log(indice);
      listaCarrito[indice].cantidad += 1;
    } else {
      producto.cantidad = 1;
      listaCarrito.push(producto);
    }
    
    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
    mostrarCarrito();
  });
});

mostrarCarrito();



