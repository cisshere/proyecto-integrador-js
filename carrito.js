var listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorProductosCarrito = document.querySelector(
  ".productos-contenedor-carrito"
);

/* actualizacionDeCarrito = () => {

  if(listaCarrito === []){
    des.classList.remove("des-carrito");
  } else {
    des.classList.add("des-carrito");
  }
} */

const mostrarCarrito = () => {
  contenedorProductosCarrito.innerHTML = "";
  //des.classList.add("des-carrito");

  listaCarrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto-carrito");

    const { img, alt, nombre, precio, cantidad } = producto;

    div.innerHTML = `
      <img src= ${img} alt="${alt}">
      <div class="datos-producto"> 
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <div class="cambiarCantidad">
        <button> - </button>
        <p> ${cantidad}</p>
        <button> + </button>
        </div>
      </div>`;
    contenedorProductosCarrito.appendChild(div);
  });


};

const actualizarCarrito = () =>{
  const des = document.querySelector(".des");
  if(listaCarrito.length === " "){
    des.classList.remove("des-carrito");
  } else {
    des.classList.add("des-carrito");
  }
}

const btnComprar = document.querySelectorAll(".btn-comprar");

btnComprar.forEach((button, i) => {
  button.addEventListener("click", () => {
    const producto = productosInfo[i];
    
    // necesito actualizar la cantidad del producto si es que existe, como busco el producto que necesito?
    // tengo que recorrer la lista hasta encontrar el producto, como comparo para saber si es el producto que necesito?
    // para saber si existe comparo el id de cada producto de la lista con el procuto.id que tengo, si no lo encuentro que hago?
    // si no lo encuentro paso al siguiente item y comparo y si no me quedan mas items no hago nada, y si lo encuentro que hago?
    // si lo encuentro tengo el indice pero en el scope del foreach, como lo disponibilizo para el resto de la funcion? 
    // creo una variable para guardar el indice para usarlo despues cuando actualizo el carrito

    let indice;
    console.log(indice);
    listaCarrito.forEach((item, index) => {
      if(item.id === producto.id){
        indice = index;
        console.log(indice);
      }
    });

    // actualizar la cantidad... y como hago eso?
    // tengo que agarrar el producto de la lista del carrito usando el indice y sumar 1  la cantidad, tengo que actualizar algun dato mas?
    // tengo que actualizar el local storage para mantener los datos, tengo que hacer algo mas?
    // tengo que actualizar la lista de la pantalla, como hago eso?
    // llamo al mostrarCarrito
    if (indice !== undefined) {
      console.log(indice);
      listaCarrito[indice].cantidad += 1;
    } else {
      //des.classList.remove("des-carrito");
      producto.cantidad = 1;
      listaCarrito.push(producto);
    }
    
    localStorage.setItem("carrito", JSON.stringify(listaCarrito));
    mostrarCarrito();
  });
});

actualizarCarrito();
mostrarCarrito();