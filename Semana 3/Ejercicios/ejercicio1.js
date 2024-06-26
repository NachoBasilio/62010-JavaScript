// FUNCIONES

/*

1. Realizar una función que solicite usuario y contraseña. Si son "user" y "pass" respectivamente, mostrar un mensaje dando la bienvenida al usuario
2. Realizar una función que reciba por parámetro un número. Mostrar un mensaje con ese número elevado al cuadrado. (Elevar un número al cuadrado consiste en multiplicarlo por sí mismo dos veces. Ejemplo: 3 al cuadrado es 3x3).
3. Realizar una función que reciba por parámetros nombre y apellido. La función debe RETORNAR un saludo del siguiente tipo: "Hola (nombre) (apellido), gusto en saludarte!"
4. Retomar la calculadora del profe de la clase pasada y modularizar el código (es decir, para cada opción dentro del switch colocar una función en vez de la lógica por completo).


Como tarea final y adicional, lo ideal es poder realizar todos los ejercicios de funciones en sus tres formas: función tradicional, función anónima y función flecha.

*/


//1- Para este ejercicio, imaginemos a Ana, una joven entusiasta de los acertijos. Un día, Ana descubre los
//palíndromos, palabras o frases que se leen igual de izquierda a derecha que de derecha a izquierda, y se siente
//fascinada por ellos. Decidió crear un juego en el que los participantes deben descubrir si una palabra o frase es
//un palíndromo o no. Para ello, ella escribe una función que verifica si una cadena es un palíndromo. 
//Así, Ana puede sorprender a sus amigos con su nuevo juego.


//2- En un tranquilo pueblo llamado Geometría, el señor Trapecio era muy conocido por sus campos de cultivo que
//tenían formas inusuales. Todos los años, el señor Trapecio necesitaba calcular el área de sus campos para 
//planificar la siembra. Un día, mientras trabajaba en su granja, se dio cuenta de que sus campos tenían una forma 
//similar a la de un trapecio. Entonces, desarrolló una fórmula especial para calcular el área de un trapecio. Con 
//esta fórmula, el señor Trapecio pudo maximizar la productividad de sus cultivos y contribuir al bienestar de su comunidad.

//FORMULA: https://i.ytimg.com/vi/uKhakN1VEF4/maxresdefault.jpg

//3- En la antigua aldea de Tiempo, los aldeanos celebraban cada cuarto año con gran alegría. Esto se debía a que 
//habían descubierto un patrón especial en el calendario: cada cuatro años, un año extra se agregaba al calendario 
//regular. Este año adicional se llamaba "año bisiesto". Los aldeanos aprendieron que para un año ser bisiesto, debía 
//cumplir ciertas condiciones. Entonces, desarrollaron una función especial para verificar si un año era bisiesto o 
//no. Esta función les ayudó a planificar sus festividades y eventos con precisión.

//FORMULA: Un año es bisiesto si cumple alguna de estas dos condiciones:
// - Es divisible por 4 pero no por 100.
// - Es divisible por 400.


//4- En la ciudad matemática de Primalandia, los ciudadanos estaban fascinados por los números primos, los cuales 
//eran considerados como los guardianes de la aritmética. Un grupo de matemáticos de la ciudad se embarcó en una 
//misión para descubrir todos los números primos hasta un límite dado. Con la ayuda de algoritmos inteligentes, 
//desarrollaron una función que generaba una secuencia de números primos. Esta función fue de gran utilidad para los 
//habitantes de Primalandia, ya que les permitió explorar el infinito mundo de los números primos y desentrañar sus misterios.

//FORMULA: 
// Un número primo es primo cuando:
// - Es mayor que 1
// - No es divisible por ningún número excepto por 1 y por sí mismo
// - Se puede iterar desde 2 hasta la raíz cuadrada del número, y si no hay ningún número en ese rango que lo divida exactamente, entonces el número es primo


//1. Realizar una función que solicite usuario y contraseña. Si son "user" y "pass" respectivamente, mostrar un mensaje dando la bienvenida al usuario.

function login(nombre, pw){
    if( nombre == "user" && pw == "pass" ){
        alert("Bienvenido, " + nombre)
    }else{
        alert("LLamamos a la policia")
    }
}

//let user = prompt("¿Cual es tu usuario?")
//let contraseña = prompt("¿Cual es tu contraseña?")

//login(user, contraseña)


//2. Realizar una función que reciba por parámetro un número. Mostrar un mensaje con ese número elevado al cuadrado. (Elevar un número al cuadrado consiste en multiplicarlo por sí mismo dos veces. Ejemplo: 3 al cuadrado es 3x3).


const cuadrificadora = function (num){
    alert(num*num*num)
}

//let numero = Number(prompt("¿Que numero quiero elevar al cubo?"))

//cuadrificadora(numero)


//3. Realizar una función que reciba por parámetros nombre y apellido. La función debe RETORNAR un saludo del siguiente tipo: "Hola (nombre) (apellido), gusto en saludarte!"

const saludador3000 = function (nombre, apellido) {
    return "Hola " + nombre + " " + apellido + ", gusto en saludarte!"
}

//const nombre = prompt("¿Cual es tu nombre?")
//const apellido = prompt("¿Cual es tu apellido")

//alert(saludador3000(nombre, apellido))

//Imaginemos un sistema de turnos médicos, queremos recorrer un ciclo FOR a partir de una función que recibe un parámetro numérico, el cual será quien defina cuántas veces iterará el ciclo para mostrar turnos disponibles para este mes: ¿Cómo podríamos lograrlo?

const turnero = (num) => {
    console.log("Los turnos de este mes son los siguientes: ")
    for (let i = 1; i <= num; i++) {
        console.log("Turno numero: " + i)
    }
}

//let numeroDeTurnos = Number(prompt("Hola doctor, que cantidad de turnos quiere dar usted este mes: "))

//turnero(numeroDeTurnos)

/*Si tenemos un negocio y todos los meses compramos productos para vender pero por catálogo nos entregan el precio sin IVA, ¿Cómo podríamos agregar el iva a los productos?
Teniendo la constante IVA = 1.21, imagina una función flecha la cual reciba un valor numérico como parámetro, y que retorne dicho valor con IVA incluido. 
El IVA debe tomarse de una constante, para que la función sea dinámica. ¿Cómo te imaginas el resultado?*/

const IVA = 1.19

const calculadoraDePrecioConIVA = (num) => {
    return num * IVA
}

/*
const cantidadDeProductos = Number(prompt("¿Cuantos productos quiere calcular con IVA?"))

for (let i = 1; i <= cantidadDeProductos; i++) {
    let precioSinIVA = Number(prompt("Precio del producto " + i))
    let precioConIVA = calculadoraDePrecioConIVA(precioSinIVA)
    console.log("El precio con iva del producto numero " + i +" es: " + precioConIVA)
}
*/

let precioSinIVA = 1

while(precioSinIVA != 0){
    precioSinIVA = Number(prompt("Precio del producto"))
    if(precioSinIVA !== 0){
        let precioConIVA = calculadoraDePrecioConIVA(precioSinIVA)
        console.log("El precio con iva del producto numero " + "es: " + precioConIVA)
        alert("Si quiere dejar de calcular mande 0")
    }
}