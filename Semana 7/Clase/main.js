const nodoId = document.getElementById("NodoId")
const nodoClass = document.getElementsByClassName("className") //HTMLCollection
const divs = document.getElementsByTagName("div")
const body = document.getElementsByTagName("body")

const nodoIdQuery = document.querySelector("#NodoId")
const nodoClassQuery = document.querySelector(".className")
const nodoClassQueryAll = document.querySelectorAll(".className") //NodeList

let nombre = "Christian"
// console.log(divs)

nodoId.children[0].innerHTML = `
    <div> ${nombre} </div>
`

nodoClass[2].innerHTML =`
    <div> Hola ${nombre}! </div>
`

nodoClass[4].className = "fondoRojo"
nodoClass[5].className = "fondoRojo"

// nodoClass[2].classList.add("fondoRojo")
// nodoClass[2].classList.remove("fondoRojo")
// nodoClass[2].classList.toggle("fondoRojo")

if(nodoClass[2].classList.contains("fondoAzul")){
    alert("Tiene la clase que buscas")
}



// console.log(nodoClassQuery)
// console.log(nodoClassQueryAll)


//Pasar de NodeList o HTMLCollection a Array
//const miArray = Array.from(elementos);

const arrayDeNodosDocument = Array.from(nodoClass)
const arrayDeNodosQuery = Array.from(nodoClassQueryAll)

// console.log(arrayDeNodosDocument)
// console.log(arrayDeNodosQuery)


// console.log(nodoClass[2].classList)

//Create Element

const divCreateElement = document.createElement("div")

const pCreateElement = document.createElement("p")
pCreateElement.innerText = "Soy un nodo creado en laboratorio"

divCreateElement.appendChild(pCreateElement)

// divCreateElement.append(pCreateElement, pCreateElement, pCreateElement)

nodoId.appendChild(divCreateElement)



nodoId.innerHTML = `
    <div> Hola ${nombre}! </div>
`



// body[0].innerHTML = ""


const boton = document.getElementById("click")
const botonUp = document.getElementById("clickUp")
const botonDown = document.getElementById("clickDown")

boton.addEventListener("click", (e) => {
    nodoClass[2].classList.toggle("fondoRojo")
    console.log(e)
})

botonUp.addEventListener("mouseup", (e) => {
    nodoClass[2].classList.toggle("fondoRojo")
    console.log(e)
})

botonDown.addEventListener("mousedown", (e) => {
    nodoClass[2].classList.toggle("fondoRojo")
    console.log(e)
})


const inputChange = document.getElementById("change")
const inputEvent = document.getElementById("input")


inputChange.addEventListener("change", (e)=>{

    let contrasenia = e.target.value
    if(!contrasenia.includes("A")){
        e.target.classList.add("fondoRojo")
    }else{
        e.target.classList.remove("fondoRojo")

    }
})



inputEvent.addEventListener("input", (e)=>{
    let contrasenia = e.target.value
    if(!contrasenia.includes("A")){
        e.target.classList.add("fondoRojo")
    }else{
        e.target.classList.remove("fondoRojo")

    }
})


let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = (e) => {console.log(e)}
input2.onkeydown = (e) => {console.log(e)}

const formEvent = document.getElementById("form")


formEvent.addEventListener("submit", (e)=>{
    e.preventDefault()
    let contrasenia = e.target.children[1].value

    if(contrasenia.length == 0){
        e.target.children[1].classList.add("fondoRojo")
    }
})