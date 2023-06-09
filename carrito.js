var listaCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const guardarCarritoEnLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(listaCarrito));
};

const mostrarTotalCarrito = () => {
  const totalCarrito = listaCarrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const totalCarritoMostrar = document.getElementById("total-carrito");
  totalCarritoMostrar.textContent = `Total: $ ${totalCarrito.toFixed(2)}`;
};

const contenedorProductosCarrito = document.querySelector(
  ".productos-contenedor-carrito"
);
const mensajeCarritoVacio = document.getElementById("mensaje-carrito-vacio");
const btnBotonesLista = document.querySelector(".btn-botones-lista");

const restarCantidad = (producto) => {
  if (producto.cantidad > 1) {
    producto.cantidad -= 1;
    mostrarCarrito();
  }
  mostrarTotalCarrito();
  guardarCarritoEnLocalStorage();
};

const sumarCantidad = (producto) => {
  producto.cantidad += 1;
  mostrarCarrito();
  mostrarTotalCarrito();
  guardarCarritoEnLocalStorage();
};

const listaCarritoVacia = () => {
  if (listaCarrito.length === 0) {
    mensajeCarritoVacio.style.display = "block";
    btnBotonesLista.style.display = "none";
  } else {
    mensajeCarritoVacio.style.display = "none";
    btnBotonesLista.style.display = "flex";
  }
};

const borrarProducto = (producto, index) => {
  if (confirm("¿Desea sacar este producto de la lista?")) {
    listaCarrito.splice(index, 1);
    guardarCarritoEnLocalStorage();
    mostrarCarrito();
    Toastify({
      text: "Se saco el producto de la lista",
      className: "info",
      duration: 2000,
      gravity: "bottom",
      close: true,
      style: {
        background: "#D63E2C",
      },
    }).showToast();
  }
  if (listaCarrito.length == 0) {
    Toastify({
      text: "No hay productos en el carrito",
      className: "info",
      duration: 2000,
      gravity: "bottom",
      close: true,
      style: {
        background: "#B724AA",
      },
    }).showToast();
    return;
  }
  mostrarTotalCarrito();
};

const btnTodos = document.querySelector(".todos");
const btnLabial = document.querySelector(".labial");
const btnGloss = document.querySelector(".gloss");
const btnMascarillas = document.querySelector(".mascarillas");

const mostrarCarrito = () => {
  contenedorProductosCarrito.innerHTML = "";

  listaCarrito.forEach((producto, index) => {
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
          <img class="tacho" src="img/tacho.png" alt="tacho">
        </button>
      </div>`;
    contenedorProductosCarrito.appendChild(div);

    const btnRestar = div.querySelector(".btn-restar");
    const btnSumar = div.querySelector(".btn-sumar");
    const btnTachoResto = div.querySelector(".btn-tacho-resto");
    const tachoProducto = div.querySelector(".btn-tacho");
    const productoCarrito = document.querySelector("producto-carrito");

    tachoProducto.addEventListener("click", () => {
      borrarProducto(productoCarrito, index);
    });

    btnTachoResto.addEventListener("click", () => {
      borrarProducto(productoCarrito, index);
    });

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
  listaCarritoVacia();
};

const btnBorrarTodo = document.querySelector(".btn-borrar-todo");

const borrarClick = () => {
  if (confirm("¿Desea borrar todo?")) {
    listaCarrito.splice(0, 100);
    contenedorProductosCarrito.innerHTML = "";
    btnBotonesLista.style.display = "none";
    mensajeCarritoVacio.style.display = "block";
    guardarCarritoEnLocalStorage();

    Toastify({
      text: "No hay productos en el carrito",
      className: "info",
      duration: 2000,
      gravity: "bottom",
      close: true,
      style: {
        background: "#B724AA",
      },
    }).showToast();
    mostrarTotalCarrito();
    return;
  }
};

btnTodos.addEventListener("click", () => {
  mostrarProductos(productosInfo);
});

const filtrar = (categoria) => {
  const productosFiltrados = productosInfo.filter(
    (producto) => producto.categoria === categoria
  );
  mostrarProductos(productosFiltrados);
};

btnLabial.addEventListener("click", () => filtrar("labial"));
btnGloss.addEventListener("click", () => filtrar("gloss"));
btnMascarillas.addEventListener("click", () => filtrar("mascarilla"));

btnBorrarTodo.addEventListener("click", borrarClick);
mostrarTotalCarrito();
mostrarCarrito();
