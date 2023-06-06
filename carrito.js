let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const contenedorProductosCarrito = document.querySelector(".productos-contenedor-carrito");

const renderCart = () => {

    contenedorProductosCarrito.innerHTML = cart.map((productoCarrito => {
        const { img, alt, nombre, precio, tono, cantidad} = productoCarrito;
        return `
        
        <div class="producto-carrito">
        <img src= ${img} alt="${alt}">

        <div class="datos-producto"> 
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <p>cantidad = ${cantidad}</p>
        </div>

        </div> `
    })).join("");
}

const dataProducto = (producto) => {
    const {id, nombre, precio, img} = producto;
    return {id, nombre, precio, img};
}

const productoExiste = (producto) =>{
    return cart.find( (item) =>{
        return item.id === producto.id;
    });
};

const btnComprar = document.querySelector(".btn-comprar");

const agregarProducto = (e) => {
    const producto = dataProducto(e.target.dataset);

    if(productoExiste(producto)){
        
    }
}


const initt = () => {
    document.addEventListener("DOMContentLoaded", renderCart);
}

initt();