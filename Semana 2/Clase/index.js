
//let notas = Number(prompt("¿Que nota tiene este alumno?"))


// if(edad < 18){
//     alert("Sos menor de edad, no podes pasar")
// }else if( edad >= 18 && edad < 25 ){
//     alert("Tenes un descuento")
// }else if(!(edad !== 99)){
//     alert("Tenes un descuento")
// }else{
//    alert("Podes pasar")
// }


//let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"

// switch (notas) {
//     case 1:
//         alert("Su nota es baja")
//         break
//     case 2:
//     case 3:
//         alert("Su nota es alta")
//         break
//     case 4: 
//         alert("Su nota es muy buena")
//         break
//     case 5: 
//         alert("Su nota es PERFECTA")
//         break
//     default:
//         alert("Pusiste cualquier cosa")
//         break
// }


// let nombre = prompt("¿Como te llamas?")


// for(let i = 0; i < nombre.length; i++){
//     console.log(nombre[i])
// }

let sumaNotas = 0
let cantidad = 0
let promedio
let notaActual = -1

// while(notaActual != -1){
//     alert("Ingrese el numero de nota del alumno o -1 si quiere detener la app")
    
//     notaActual = Number(prompt("¿Cual es la nota?"))
//     cantidad++

//     if(notaActual == -1){
//         alert("Fin de app")
//     }else if(!(notaActual >= 1 && notaActual <= 10)){
//         alert("La nota esta fuera del rango!")
//     }else{
//         sumaNotas = sumaNotas + notaActual
//     }
// }

// do{
//     alert("Ingrese el numero de nota del alumno o -1 si quiere detener la app")
//     notaActual = Number(prompt("¿Cual es la nota?"))
//     cantidad++

//     if(notaActual == -1){
//          alert("Fin de app")
//     }else if(!(notaActual >= 1 && notaActual <= 10)){
//         alert("La nota esta fuera del rango!")
//     }else{
//         sumaNotas = sumaNotas + notaActual
//     }

// }while(notaActual != -1)


// if(cantidad == 0){
//     alert("Vamos a llamar a la policia")
// }else{
//     promedio = sumaNotas/cantidad
//     alert("El promedio de nota es igual a: " + promedio )
// }

let numeroRandom = Math.floor(Math.random() * 100)
let numeroDelUsuario = 1
let puntos = 0


console.log(numeroRandom)

// do{
//     numeroDelUsuario = prompt("Digame un numero entre le 1 y el 100")

//     if(numeroDelUsuario > numeroRandom){
//         alert("Piense en un numero mas chico")
//     }
    
//     if(numeroDelUsuario < numeroRandom){
//         alert("Piense en un numero mas grade")
//     }

//     puntos++

//     if(puntos == 6){
//         alert("Te pasaste de cantidad de intentos")
//         break
//     }

// }while(numeroDelUsuario != numeroRandom)


for (let i = 0; i < 6; i++) {
    numeroDelUsuario = prompt("Digame un numero entre le 1 y el 100")
    puntos++
    
    if(numeroDelUsuario > numeroRandom){
        alert("Piense en un numero mas chico")
    }else if(numeroDelUsuario < numeroRandom){
        alert("Piense en un numero mas grade")
    }else{
        alert("Ganaste")
        break
    }
    
    
}

alert("Tu cantida de intentos fue: " + puntos)