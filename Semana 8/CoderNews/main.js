const contenedorMayor = document.getElementById("Container-Main")

const URLapi = "https://newsdata.io/api/1/news?apikey=pub_42059b40a4161655883c96c95f3e259fd7ecd&language=es&q=programacion" 

class Noticia {
    constructor(titulo, contenido, autor, imagen) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
        this.imagen = imagen;
    }
}


const contenedorMain = document.getElementById("Container-Main")
const body = document.getElementsByTagName("body")


const llamadoraDeNoticias = async () => {
    const res = await fetch(URLapi)
    const data = await res.json()

    console.log(data)
    data.results.forEach(noticia =>{
    contenedorMain.innerHTML += `
        <div class="card">
            <h3>${noticia.title}</h3>
            <p>${noticia.description || "Sin descripcion"}</p>
            <img src=${noticia.image_url} alt=""/>
            <p class="autor">${noticia.creator || "Sin autor"}</p>
        </div>
    `
})
}

llamadoraDeNoticias()





const botonDark = document.getElementById("botonDark")
let modoDark = localStorage.getItem("dark")


if(modoDark==null){
    localStorage.setItem("dark", "off")
}else{
    if(modoDark == "on"){
        body[0].classList.add("bodyDark")
    }
}


botonDark.addEventListener("click", ()=>{
    body[0].classList.toggle("bodyDark")
    if(body[0].classList.contains("bodyDark")){
        localStorage.setItem("dark", "on")
    }else{
        localStorage.setItem("dark", "off")
    }
})

