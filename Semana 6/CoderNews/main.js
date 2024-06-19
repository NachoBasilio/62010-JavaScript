class Noticia {
    constructor(titulo, contenido, autor) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
    }
}


const noticias = [
    new Noticia("Julian Alvarez marca 10 goles en un solo partido y establece un nuevo récord mundial", "El joven jugador argentino del River Plate deja boquiabiertos a los aficionados al marcar 10 goles en un solo partido, superando cualquier récord previo en la historia del fútbol.", "Juan Pérez"),
    new Noticia("Científicos descubren un nuevo dispositivo de realidad virtual que permite a los usuarios viajar en el tiempo", "Un equipo de investigadores ha desarrollado un dispositivo de realidad virtual revolucionario que transporta a los usuarios a cualquier momento histórico, desde la era de los dinosaurios hasta el futuro distante.", "María González"),
    new Noticia("Nueva entrega de Pokémon presenta a Cristiano Ronaldo como entrenador maestro", "La última entrega de la serie Pokémon sorprende a los fans al incluir a Cristiano Ronaldo como un legendario entrenador Pokémon, desafiando a los jugadores a derrotarlo en una batalla épica.", "Carlos Martínez"),
    new Noticia("Científicos logran clonar dinosaurios y planean abrir un parque temático", "Un grupo de científicos ha logrado un avance sin precedentes al clonar dinosaurios extintos y planean abrir un parque temático donde los visitantes podrán ver a estas criaturas prehistóricas en vivo.", "Laura Sánchez"),
    new Noticia("Angelina Jolie firma un contrato histórico para protagonizar diez películas de acción consecutivas", "La reconocida actriz Angelina Jolie ha firmado un contrato sin precedentes para protagonizar una serie de diez películas de acción consecutivas, cada una con presupuestos multimillonarios y efectos especiales de vanguardia.", "Diego López"),
    new Noticia("Elon Musk revela su último proyecto: colonizar Marte en solo un año", "El empresario multimillonario Elon Musk ha anunciado", "Andrés López"),
    new Noticia("Roger Federer gana el Abierto de Australia sin perder un solo set", "El tenista suizo Roger Federer ha logrado una hazaña extraordinaria al ganar el Abierto de Australia sin perder un solo set en todo el torneo, demostrando su dominio indiscutible en la cancha.", "Andrés López"),
    new Noticia("Apple lanza un iPhone que puede teletransportar a los usuarios a cualquier parte del mundo", "La empresa tecnológica Apple ha presentado su último lanzamiento: un iPhone con la capacidad de teletransportar a los usuarios a cualquier ubicación del mundo con solo tocar la pantalla.", "Elena Martínez"),
    new Noticia("Científicos descubren una nueva forma de vida extraterrestre en la Luna", "Un equipo de científicos ha hecho un descubrimiento impactante al encontrar evidencia de una forma de vida extraterrestre en la Luna, desencadenando un debate global sobre el origen y la naturaleza de esta misteriosa entidad.", "Roberto Soto"),
    new Noticia("Lady Gaga anuncia su próxima gira mundial que incluirá conciertos en la Luna y Marte", "La superestrella del pop Lady Gaga ha dejado a sus fans emocionados al anunciar su próxima gira mundial, que incluirá conciertos en la Luna y Marte, marcando un hito histórico en la industria del entretenimiento.", "María Fernández")
];


// Diseña una función que recorra todas las noticias y genere un resumen creativo de cada una, utilizando solo 10 palabras o menos. Utilizando ForEach.

const generarResumen = (noticia) => {
    // Dividir el contenido en palabras en un array
    const palabras = noticia.contenido.split(' ');
    
    
    if(palabras.length >= 10){
        const resumen = palabras.slice(0, 10).join(' ') + "...";
        return resumen;
    }else{
        const resumen = palabras.join(' ')
        return resumen;
    }
    // Tomar las primeras 10 palabras, o todas si hay menos de 10

  
};


noticias.forEach(el => {
    el.contenido = generarResumen(el)
})

console.log(noticias)


// Crea una función que utilice find() para buscar una noticia por su título y otra por alguna palabra que este en el contenido.

// const noticiaABuscar = prompt("¿Que noticia quiere buscar?")

// const primerNoticia = noticias.find(el => {
//     return el.titulo.includes(noticiaABuscar)
// })

// alert(primerNoticia.titulo)

// Crea una función que utilice filter() para obtener todas las noticias escritas por un autor específico.

// const Autor = prompt("¿Que autor quiere buscar?")

// const noticiasDelAutor = noticias.filter(el => {
//     return el.autor.includes(Autor)
// })

// noticiasDelAutor.forEach(el =>{
//     alert(el.titulo)
// })

// Crea una función que utilice some() para verificar si existe alguna noticia escrita por un autor específico.

const Autor = prompt("¿Que autor quiere buscar?")

const noticiasDelAutor = noticias.some(el => {
    return el.autor.includes(Autor)
})

console.log(noticiasDelAutor)


// Crea una función que utilice map() para obtener un array con los títulos de todas las noticias, también para crear un nuevo array de noticias donde los títulos estén todos en mayúsculas.

const TodosLosTitulos = noticias.map(el => el.titulo)

const TitulosEnMayuscula = TodosLosTitulos.map(el => el.toUpperCase())

console.log(TitulosEnMayuscula)

// Crea una función que utilice reduce() para obtener la cantidad total de noticias.

const cantidadTotal = noticias.reduce((acc, el) =>{
    return acc + 1
}, 0)

// Crea una función que utilice sort() para ordenar las noticias por título.

noticias.sort((a, b) => {
    if (a.titulo > b.titulo) {
        return -1;
    }
    if (a.titulo < b.titulo) {
        return 1;
    }
    // a es igual a b
    return 0;
})

console.log(noticias)
