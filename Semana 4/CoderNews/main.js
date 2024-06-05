// Organización de noticias en "coderNews":
// El equipo de "coderNews" ha desarrollado un sistema basado en arrays para gestionar y organizar noticias en su plataforma.

const noticias = ["Noticia1", "Noticia2", "Noticia3", "Noticia4", "Noticia5", "Noticia6"];

// for (let noticia of noticias){
//     document.write(noticia + " ")
// }


// El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array, titulada "Nueva actualización del sistema operativo".


noticias.push("Nueva actualización del sistema operativo")



noticias.unshift("Noticia0")
//console.log(noticias)

// Agregando más noticias:
// El artículo informa cómo el equipo agrega noticias adicionales a su lista utilizando el método "push" o "unshift".


// Eliminando noticias:
// El equipo está revisando qué noticias son más relevantes. La página de noticias revela cómo eliminan la primera noticia utilizando el método "shift".

noticias.shift()


// También se informa que el equipo decide eliminar la última noticia utilizando el método "pop".

noticias.pop()
console.log(noticias)

// Actualizando noticias:
// El equipo decide actualizar una noticia existente utilizando el método "splice". El artículo detalla cómo modifican una noticia existente y agregan una nueva en su lugar.

noticias.splice(2,2)
console.log(noticias)

// Uniendo las noticias:
// El artículo muestra cómo los periodistas utilizan el método "join" para unir todas las noticias en una sola cadena legible.




// El editor en jefe revela que el equipo está revisando el contenido utilizando los métodos "indexOf" e "includes" para identificar ciertas noticias.

//Diga si esta
//const noticiaABuscar = prompt("¿Que noticia busca?")


const buscadorIncludes = (noticia) => {
    const estaONo = noticias.includes(noticia)
    if(estaONo){
        const indice = noticias.indexOf(noticia)
        alert("La noticia: " + noticias[indice] + "\nSe encuentra en el indice: " + indice)
    }else{
        alert("la noticia no esta")
    }
}

//buscadorIncludes(noticiaABuscar)


//Editar


const editarNoticia = (noticia) => {
    const estaONo = noticias.includes(noticia)

    if(estaONo){
        const indice = noticias.indexOf(noticia)
        let noticiaActual = noticias[indice]
        let nuevaNoticia = prompt("Como quiere que se llame la noticia ahora?")
        noticias[indice] = nuevaNoticia

        alert("Ahora, " + noticiaActual + " es " + nuevaNoticia)
        console.log(noticias)
        const TodoNoticias = noticias.join("<hr></hr> ")
        document.write(TodoNoticias)
    }else{
        alert("la noticia no esta")
    }
}

// const noticiaABuscar = prompt("¿Que noticia busca?")
// editarNoticia(noticiaABuscar)

//Agregar

const agregarNoticias = (indice) => {
    if(indice < noticias.length){
        let nuevoValor = prompt("Que valor quiere agregar?")
        noticias.splice(indice, 0, nuevoValor)
        console.log(noticias)
        const TodoNoticias = noticias.join("<hr></hr> ")
        document.write(TodoNoticias)
    }else{
        alert("Su numero es mayor al del indice")
    }
}

// const noticiaABuscar = prompt("¿Donde quiere agregar una noticia?")
// agregarNoticias(noticiaABuscar)
// Longitud del array de noticias:
// El editor destaca el uso del método "length" para obtener el número total de noticias en la lista.

console.log(noticias.length)

// Obtener una copia de las primeras dos noticias utilizando el método "slice(inicia, final)":

// const arrayCopia = noticias.slice(0,3) 3
// const arrayCopia = noticias.slice(0,1) 1

const arrayCopia = noticias.slice(0,2)
console.log(arrayCopia)



const test = () => {
    
    if(true){
        let nombre = "nacho"
    }
    let nombre = Seba
    console.log(nombre)
}

test()



