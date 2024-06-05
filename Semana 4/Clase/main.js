const alumnos = ["Carlos", "María", "Juan", "Lucía", "José", "Ana", 1 ,"Pedro", "Laura", "Miguel", "Elena", "Javier", "CaRmen"] //ASD21dS

const numeros = [1,12,321,2,3,45,4,23,16]


// const intruso = alumnos.splice(6,3)

// console.log(alumnos)

// const losMejoresAlumnos = alumnos.slice(0,5)

// console.log(losMejoresAlumnos)

// const nuevoArray = intruso.concat(losMejoresAlumnos)

// console.log(nuevoArray)

// console.log(alumnos)

// alumnos.unshift("Nacho")

// console.log(alumnos)

// const todosLosAlumos = alumnos.join(", ")

// console.log(todosLosAlumos)


// let persona = prompt("¿A quien busca?")

// let indice = alumnos.indexOf(persona)
// if(indice != -1){
//     alert(alumnos[indice] + " se encuentra en el indicie " + indice)
// }else{
//     alert("Esa persona no esta")
// }

// console.log(indice)

// let persona = prompt("¿A quien busca?")
// let personaABuscar = alumnos.includes(persona)


// if(personaABuscar){
//     alert(persona + " se encuentra en esta lista")
// }else{
//     alert(persona + " no se encuentra en esta lista")
// }

// console.log(numeros)

// numeros.sort()

// console.log(numeros)

// console.log(alumnos)

// alumnos.sort().reverse()

// console.log(alumnos)


// console.log(alumnos)

// let alumnosCortados = alumnos.splice(1, 4)

// console.log(alumnos)
// console.log(alumnosCortados)




// let alumnosNuevos = alumnos.slice(0, 13)

// let arrayNuevo = alumnos 

// let nombre = "Nacho" 

// console.log(arrayNuevo)
// console.log(alumnosNuevos)


// alumnos.push("Rengar")

// console.log(arrayNuevo)
// console.log(alumnosNuevos)


// arrayNuevo.pop()
// arrayNuevo.pop()
// arrayNuevo.pop()
// arrayNuevo.pop()

// console.log(alumnos)

// for (let index = 0; index < alumnos.length; index++) {
//     const element = alumnos[index];
// }


// let persona = prompt("¿A quien quiere eliminar?")

// let indice = alumnos.indexOf(persona)

// if(indice != -1){
//     alumnos.splice(indice, 1)
//     alert(alumnos.join("\n "))
// }else{
//     alert("Esa persona no esta")
// }


for (let alumno of alumnos) {
    console.log(alumno); 
}
