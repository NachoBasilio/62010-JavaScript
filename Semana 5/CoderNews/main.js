// Organización de noticias en "coderNews":

// El equipo de "coderNews" ha desarrollado un sistema basado en objetos para gestionar y organizar noticias en su plataforma.


let noticias;

let noticiasStorage = JSON.parse(localStorage.getItem("noticias"))

console.log(noticiasStorage)

if(noticiasStorage == null){
    noticias = []
}else{
    noticias = noticiasStorage
}


// El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array. Utilizando objetos literales. 

const noticia1 = {
    titulo: "Hombre mordio perro",
    contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet dolorum eum facere neque voluptatem optio quasi? Alias possimus et at nobis minus.",
    img: "www.img.png",
    subTitulo: "Pueblo asustado",
    autor: "Rengar"
}

noticias.push(noticia1)

console.log(noticias)

// Como se dieron cuenta que el proceso puede ser algo tardado decidieron usar funciones constructoras:

function NoticiaConstructora(titulo, contenido, img, subTitulo, autor){
    this.titulo = titulo
    this.contenido = contenido
    this.img = img
    this.subTitulo = subTitulo
    this.autor = autor
}

let noticia2 = new NoticiaConstructora("Explota un bomba de agua", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi sed eos? Fuga ratione ipsam et dolores dolore ipsum suscipit perferendis omnis sit.", "www.img.png", "Publo re asustado", "Yo")

noticias.push(noticia2)

console.log(noticias)


// Estaría genial utilizar algun tipo de bucle para molestar al usuario con todas nuestras noticias ¿No?
    
let bandera = false

while(bandera){
    let titulo = prompt("Agregue el titulo")
    let contenido = prompt("Agregue el contenido")
    let img = prompt("Agregue el img")
    let subTitulo = prompt("Agregue el subTitulo")
    let autor = prompt("Agregue el autor")

    let noticiaAux = new NoticiaConstructora(titulo,contenido,img,subTitulo,autor)

    noticias.push(noticiaAux)

    bandera = confirm("¿Quiere seguir?")
}


// Ahora llegaron nuevas tecnologias para crear estos objetos, las clases, ¿Podrias crear una clase que responda a nuestras necesidades dentro de CoderNews?

class NoticiasClass {
    constructor(titulo, contenido, img, subTitulo, autor){
        this.titulo = titulo
        this.contenido = contenido
        this.img = img
        this.subTitulo = subTitulo
        this.autor = autor
    }
    mostrarNoticia(){
        alert(`El titulo es: ${this.titulo}\nEl contenido es: ${this.contenido}\n`)
    }
}


let noticia4 = new NoticiasClass("Explota un bomba de agua", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi sed eos? Fuga ratione ipsam et dolores dolore ipsum suscipit perferendis omnis sit.", "www.img.png", "Publo re asustado", "Yo")


noticias.push(noticia4)

//noticia4.mostrarNoticia()
    
//Ahora podríamos crear un algoritmo para crear nuevas noticias desde el navegador, ¡VAMOS!
    
    
//¿Y si usamos el localStorage?

localStorage.setItem("noticias", JSON.stringify(noticias))