
//Función tradicional para calcular la cantidad de caracteres en un titular de noticia:

//Descripción: En CoderNews, necesitamos asegurarnos de que los titulares de las noticias
//no excedan cierta longitud para mantener la presentación limpia, no tiene que tener mas de 30 caracteres. Esta función calculará 
//la cantidad de caracteres en un titular dado.

function contadorCaracteres(titulo) {
    if( titulo.length >= 60 ){
        console.log("El titulo es muy grande, hay que modificarlo")
    }else{
        console.log("El titulo esta bien")
    }
}

contadorCaracteres("Rengar, se comio a un a persona")


//Función para determinar si una noticia es corta o larga:

//Descripción: CoderNews quiere clasificar automáticamente las noticias como cortas o largas para ayudar 
//a los lectores a elegir qué leer. Esta función determina si una noticia dada es corta o larga según la longitud de su contenido.

//Pista: Tiene que retornar un booleano si es mayor a 100

function clasificadorDeNoticias(contenido){
    if(contenido.length >= 100){
        return true
    }else{
        return false
    }
}

const noticia1Contendio = "Lorem, ipsum dolor sit amet consectetur ."

const resultado = clasificadorDeNoticias(noticia1Contendio)


function lectorDelClasificador(resultado){
    if(resultado){
        alert("El contendio es muy largo")
    }else{
        alert("El contenido es corto")
    }
}

//lectorDelClasificador(resultado)

//Función de flecha para determinar la importancia de una noticia según la cantidad de comentarios:

//Descripción: CoderNews quiere etiquetar automáticamente la importancia de una noticia según la 
//cantidad de comentarios que recibe. Esta función determina esa importancia.

const determinarRangos = (comentarios) => {
    if(comentarios >= 1 && comentarios <= 10){
        return "bajo"
    }else if(comentarios > 10 && comentarios <= 20 ){
        return "mas o menos"
    }else if(comentarios > 20 && comentarios <= 30){
        return "medios"
    }else if(comentarios > 30 && comentarios <=40 ){
        return "medio altos"
    }else if (comentarios > 40 && comentarios <= 60){
        return "altos"
    }else if (comentarios > 60){
        return "muy altos"
    }else{
        return "todo mal"
    }
}



// const determinadorDeImportancia = (comentarios) => {
//     let comentariosString = determinarRangos(comentarios)
//     switch(comentariosString){
//         case "bajo":
//             alert("La noticia tiene pocos comentarios")
//             default
//         case ...
//     }
// }



//Función anónima que muestra un mensaje personalizado según la relevancia de una noticia:

//Descripción: Los usuarios de CoderNews pueden calificar la relevancia de las noticias, 
//y esta función proporciona un mensaje personalizado según la calificación




const IVA = 0.21;
//let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = (imp, iva) => {
    return imp * iva
};

//console.log(precioConIVA(importe, IVA))

const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
let M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 => {
    return m2 * valorM2 * comision
};
const valorPoliza = calcularPoliza(M2);
console.log("El costo de la póliza es: $", valorPoliza);

//¿Qué tiene que hacer este código?
//¿Por qué no cumple con su función?
//¿Qué propuesta podrías hacer para que tenga sentido su uso?