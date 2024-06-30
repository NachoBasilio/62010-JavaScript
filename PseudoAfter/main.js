const listaArticulos = [
    {
      nombre: "Libro de ficción",
      descripcion: "Una emocionante novela de misterio",
      valor: 29.99,
    },
    {
      nombre: "Revista técnica",
      descripcion: "Artículos sobre programación y desarrollo web",
      valor: 9.99,
    },
    {
      nombre: "Libro de referencia",
      descripcion: "Guía completa sobre JavaScript",
      valor: 49.99,
    },
]

const main = document.getElementById("main")
const carritoDOM = document.getElementById("carrito")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []


listaArticulos.forEach(el => {
    main.innerHTML += `<div class="producto">
        <h3>${el.nombre}</h3>
        <p>${el.descripcion}</p>
        <p>${el.valor}</p>
        <button class="agregar"> Comprar </button>
    </div>`
})

function muestreElCarrito(){
    if(!carrito){
        return
    }
    carritoDOM.innerHTML = ""
    carrito.forEach(el => {
        carritoDOM.innerHTML += `
            <div>
                <h3>${el.titulo}</h3>
                <p>${el.precio}</p>
                <p>${el.cantidad}</p>
                <button class="eliminar"> eliminar </button>
            </div>
        `
    })
    let total = carrito.reduce((acumulador, i) =>{
        return acumulador + parseFloat(i.precio) * i.cantidad
    }, 0)
    carritoDOM.innerHTML += `<p>${total}</p>`
    carritoDOM.innerHTML += `<button class="terminar"> Terminar compra </button>`

    agregadoraDeEventos(eventoParaEliminar, "eliminar")
    agregadoraDeEventos(eventoParaTerminar, "terminar")
}


function eventoParaTerminar(){
    localStorage.clear()
    carrito = []
    muestreElCarrito()
}

function agregadoraDeEventos(evento, clase, eventoString = "click"){
    const nodos = document.getElementsByClassName(clase)
    const ArrayNodos = Array.from(nodos)

    ArrayNodos.forEach(el => {
        el.addEventListener(eventoString, evento)
    })
}


function eventoParaAgregarAlCarrito(e){
    let titulo = e.target.parentElement.children[0].innerText
    let precio = e.target.parentElement.children[2].innerText


    if(carrito.some((el)=>{
        return el.titulo == titulo
    })){
        let titulos = carrito.map(el => el.titulo)

        let indice = titulos.indexOf(titulo)

        carrito[indice].cantidad++
    }else{
        carrito.push({
            titulo,
            precio,
            cantidad: 1
        })
    }


    localStorage.setItem("carrito", JSON.stringify(carrito))

    muestreElCarrito()
}

function eventoParaEliminar(e){
    let titulo = e.target.parentElement.children[0].innerText
    let titulos = carrito.map(el => el.titulo)

    let indice = titulos.indexOf(titulo)

    if(carrito[indice].cantidad <= 1){

        carrito.splice(indice, 1)
        
    }else{
        carrito[indice].cantidad--
    }

    muestreElCarrito()
}

agregadoraDeEventos(eventoParaAgregarAlCarrito, "agregar")


document.addEventListener("DOMContentLoaded", ()=>{
    muestreElCarrito()
})