const alumnos = ["Carlos", "María", "Juan", "Lucía", "José", "Ana" ,"Pedro", "Laura", "Miguel", "Elena", "Javier", "Carmen"] 

const pokemon =  [
    {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
    name: "metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
    name: "kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
    name: "beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
    shiny: true
    },
    {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/"
    }
]


const numeros = [1, 2, 3, 4, 5]
const total = numeros.reduce((acumulador, elemento) => {
    return acumulador - elemento
}, 0)


console.log(total)


//const pokemonABuscar = prompt("¿Que pokemon busca?")

const funcionBuscadora = (nombre) => {
    const pokemonFiltrados = pokemon.filter(el => {
        return el.name.includes(nombre)
    })
    console.log(pokemonFiltrados)
}

// funcionBuscadora(pokemonABuscar)




const pokemonBuscadoSome = pokemon.some((patito) => {
    return (patito.shiny == true && patito.name == "charmander")
})

//console.log(pokemonBuscadoSome)


//const pokemonABuscar = prompt("¿Que pokemon busca?")
const pokemonBuscado = pokemon.find((patito) => {
    return patito.name.includes("ra")
})

//console.log(pokemonBuscado)

const nombrePokemon = pokemon.map(pkm => {
    return pkm.url
})

// console.log(nombrePokemon)

const hacerMayuscula = (cadena)=>{
    return cadena.toUpperCase() 
}


// alumnos.forEach((el)=>{
//     document.write(el)
// })


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


const newArray = alumnos.map(hacerMayuscula)

// console.log(newArray)
// console.log(alumnos)


const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const cursosJS = cursos.filter((curso)=>{
    return curso.nombre.includes("JS")
})

//console.log(cursosJS)

const productos = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 0.5
    }
})

const nombres = cursos.map((el)=>{
    return el.nombre
})

// console.log(nombres)

// console.log(productos)




// const funcionOS = (saludo) => {
   

//     return (persona) => { 
//         // console.log(saludo + " " + persona)
//     }
// }


// funcionOS("Hola como estas")("Rodrigo")


// const calculadora = (calculo, a, b) => {
//     const resultado = calculo(a, b)
//     // console.log(resultado)
//     return resultado
// }

// const suma = (a, b) => {
//     return a + b
// }

// const resta = (a, b) => {
//     return a - b
// }


// calculadora(suma, 10, 5)
// calculadora(resta, 10, 5)


// const forPorCadaUno = (arreglo, func) => {
//     const nuevoArray = []
//     for(parte of arreglo){
//         nuevoArray.push(func(parte))
//     }
//     return nuevoArray
// }




// const nuevoArray = forPorCadaUno(alumnos,hacerMayuscula)

// // console.log(nuevoArray)