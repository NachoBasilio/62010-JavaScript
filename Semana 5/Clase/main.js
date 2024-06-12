const persona1 = {
    nombre: "Juan",
    apellido: "Pardo",
    edad: 18,
    dinero: 30000,
    agregar: function (dineroNuevo) {
        this.dinero = dineroNuevo + this.dinero
    },
    quita: function (dineroAQuitar) {
        this.dinero = this.dinero - dineroAQuitar 
    },
}

// const persona2 = {
//     nombre: "Genaro",
//     apellido: "Bottarlini",
//     edad: 34,
//     dinero: 2000,
    // agregar: function (dineroNuevo) {
    //     this.dinero = dineroNuevo + this.dinero
    // },
    // quita: function (dineroAQuitar) {
    //     this.dinero = this.dinero - dineroAQuitar 
    // },
// }

// console.log(persona1.dinero)

// persona1.agregar(30)

// console.log(persona1.dinero)

// persona1.quita(30000)

// console.log(persona1.dinero)


// function Cliente(nombre, apellido, edad){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.dinero = 0
//     this.agregar = function (dineroNuevo) {
//         this.dinero = dineroNuevo + this.dinero
//     }
// this.quita = function (dineroAQuitar) {
//     this.dinero = this.dinero - dineroAQuitar 
//     }
// }

class Cliente {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dinero = 0
    }
    agregar (dineroNuevo){
        this.dinero = dineroNuevo + this.dinero
    }
    quita (dineroAQuitar){
        this.dinero = this.dinero - dineroAQuitar 
    }
    setnombre(nombre){
        this.nombre = nombre
    }
    getnombre(){
        return this.nombre
    }
}


// const persona1 = new Cliente("Sebastian", "Miño", 20)

// console.log(persona1.dinero)

// persona1.agregar(23)

// console.log(persona1.dinero)

// persona1.quita(10)

// console.log(persona1.dinero)


// const persona2 = new Cliente("Christian", "Alcalde", 33)

// console.log(persona2.getnombre())

// persona2.setnombre("pepito")

// console.log(persona2.getnombre())


//Storage!!!!!!! NO ES UNA BBDD


//localStorage "Permanente"
//sessionStorage "mientras el navegador esta activo"

// localStorage.setItem("darkmode", 43)

// let modoOscuro = localStorage.getItem("darkmode")

// console.log(modoOscuro)



// localStorage.setItem("persona", JSON.stringify(persona1))

// let personaRecuperada = JSON.parse(localStorage.getItem("persona"))

// let persona1New = new Cliente(personaRecuperada.nombre, personaRecuperada.apellido, personaRecuperada.edad)

// console.log(persona1New)
// console.log(persona1)

// let alumno = localStorage.getItem("alumnos")

// console.log(alumno)

// let nombre = "nacho"


// console.log(`Hola ${persona1.nombre}`)