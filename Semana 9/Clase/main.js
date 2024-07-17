const elementoPrincipal = document.getElementById("main")
const botonCarrito = document.getElementById("carrito")
const carritoFisico = document.getElementById("carritoFisico")
const productosDOM = document.getElementById("productos")
const arrayProductos = []

class CarritoDeCompras {
    constructor() {
        this.articulos = JSON.parse(localStorage.getItem('carrito')) || [];
    }

    agregarProducto(producto) {
        const productoExistente = this.articulos.find(prod => prod.titulo === producto.titulo);
        if(productoExistente){
            productoExistente.cantidad++;
        }else{
            producto.cantidad = 1;
            this.articulos.push(producto);
        }

        this.guardarCarrito();
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.articulos) {
            total += producto.precio * producto.cantidad;
        }
        return total;
    }

    guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(this.articulos));
    }

    limpiarCarrito() {
        localStorage.removeItem('carrito');
        this.articulos = [];
    }
}

const miCarrito = new CarritoDeCompras()

function crearTarjetaDeProducto({titulo, precio, imagen, descripcion}){
    elementoPrincipal.innerHTML += `
        <div class="contenedorImagen">
            <img src="${imagen}" />
            <div>
                <div>
                    <h3 class="titulo">${titulo}</h3>
                    <p class="desc">${descripcion}</p>
                </div>
                <div class="contenedorPrecioYBoton">
                    <p class="precio">${precio}</p>
                    <button class="agregar">Comprar</button>
                </div>
            </div>
        </div>
    `
}

// const llamadoAJson = async () => {
//     const rpt = await fetch("./info.json")
//     const data = await rpt.json()


//     data.articulos.forEach(producto => {
//         crearTarjetaDeProducto(producto)
//     })
//     agregarEvento()
// }

// llamadoAJson()

fetch("./info.json")
.then(datos => {
    if(!datos.ok){
        throw new Error("Error al traer los datos")
    }else{
        return datos.json()
    }
})
.then(productos => {
    productos.articulos.forEach(producto => {
        crearTarjetaDeProducto(producto)
    })
    agregarEvento()
})
.catch(e => {
    console.error("Hubo un error al operar con fetch " + e.message)
})

function mostrarCarrito (){
    carritoFisico.innerHTML = ""

    miCarrito.articulos.map(producto=>{
        carritoFisico.innerHTML += `<div class="prodEnCarrito">
            <p class="tituloProducto">${producto.titulo}</p>
            <div class="precioYCantidad">
                <p>$ ${producto.precio}</p>
                <p>${producto.cantidad}</p>
            </div>
        </div>`
    })

    carritoFisico.innerHTML += `<div>
        <h3>Total: ${miCarrito.calcularTotal()}</h3>
        <button id="borrar">Terminar Compra</button>
        <button id="cancelar">Cancelar Compra</button>
    </div>`

    const cancelar = document.getElementById("cancelar")
    cancelar.addEventListener("click", ()=>{
        Swal.fire({
            title: "¿De verdad no nos querés comprar? 🤬😤",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si, soy malvado 💀",
            denyButtonText: `No, fue un error`
        }).then((result) => {
            if (result.isConfirmed) {
                miCarrito.limpiarCarrito()
                badgeNumeroCarrito()
                mostrarCarrito()
            } else if (result.isDenied) {
            Swal.fire("Gracias uwu");
            }
        });
    })

    const borrar = document.getElementById("borrar")
    borrar.addEventListener("click", ()=>{
        miCarrito.limpiarCarrito();
        Swal.fire({
            title: "Gracias por su compra ¿Esta seguro de hacerla?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si, soy un capo",
            denyButtonText: `No, 💀`
        }).then((result) => {
            if (result.isConfirmed) {
                miCarrito.limpiarCarrito()
                badgeNumeroCarrito()
                mostrarCarrito()
            } else if (result.isDenied) {
            Swal.fire("Jej 💀");
            }
        });
    })
}

function agregarEvento (){
    const botones = document.getElementsByClassName("agregar")
    const arrayBotones = Array.from(botones)

    arrayBotones.map(boton=>{
        boton.addEventListener("click", (e)=>{
            let precio = Number(e.target.parentElement.children[0].innerText)
            let titulo = e.target.parentElement.parentElement.children[0].children[0].innerText
            miCarrito.agregarProducto({
                titulo,
                precio,
                cantidad: 0,
            })
            Swal.fire({
                title: `Usted agrego ${titulo}, a su carrito`,
                icon: "success",
                background: "#d4d4d4",
                color: "black",
                iconColor: "green",
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
            badgeNumeroCarrito()
            mostrarCarrito()
        })
    })

}

function badgeNumeroCarrito (){
    const cantidadDeProductos = miCarrito.articulos.reduce((acc, current)=>{
        return acc + current.cantidad
    },0)
    const cantidadNodo = document.getElementById("cantidad")
    cantidadNodo.innerHTML = cantidadDeProductos
}

botonCarrito.addEventListener("click", ()=>{
    carritoFisico.classList.toggle('active')
})


document.addEventListener("DOMContentLoaded", ()=>{
    badgeNumeroCarrito()
})