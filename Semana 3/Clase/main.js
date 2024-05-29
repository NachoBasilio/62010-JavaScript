



function SumaDosNumeros(numUno, numDos){
    return numUno + numDos
}



let sumaTotal = SumaDosNumeros(30, 50)


function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            
        case "-":
            return primerNumero - segundoNumero;
            
        case "*":
            return primerNumero * segundoNumero;
            
        case "/":
            return primerNumero / segundoNumero;
            
        default:
            return 0;
    }
}

//let numeroUno = Number(prompt("¿Cual es su primer numero?"))
//let numeroDos = Number(prompt("¿Cual es su segundo numero?"))
//let tipoDeOperacion = prompt("¿Cual es la operacion a realizar?")

//let resultado = calculadora(numeroUno, numeroDos, tipoDeOperacion)

//alert(resultado)


function saludarAUnEstudiante(nombre){
    alert("Hola, " + nombre)
}//Funcion tradicional


//let nombreActual = prompt("¿Como te llamas?")

//saludarAUnEstudiante(nombreActual)

const saludarGenteAnonima = function (nombre){
    alert("Hola, " + nombre)
}//Funcion anonima

let nombreActual = prompt("¿Como te llamas?")
//saludarGenteAnonima(nombreActual)


const saludarGenteConFlecha = (nombre) => {
    alert("Hola, " + nombre)
}//Funcion anonima


saludarGenteConFlecha(nombreActual)

