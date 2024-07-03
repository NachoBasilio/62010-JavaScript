
// function saludo (numero){
//     console.log("Hola, soy un timeOut", numero)
// }

// saludo(1)
// setTimeout(()=>{saludo(2)}, 5000)
// setTimeout(()=>{saludo(3)}, 5000)
// setTimeout(()=>{saludo(4)}, 5000)
// setTimeout(()=>{saludo(5)}, 5000)


// setInterval(() => {
//     saludo(7)
// }, 1000)

// saludo(6)

// const URL = "https://pokeapi.co/api/v2/pokemon"
// const nodoMain = document.getElementById("main")


// const creadoraDeCards = (nombre, img) => {
//     nodoMain.innerHTML += `<div>
//         <p>${nombre}</p>
//         <img src="${img}"/>
//     </div>`
// }

// const llamarDeAUno = async (array) => {
//     try {
//         const arrayDePromesas = await Promise.all(array.map(async (url) => {
//             const res = await fetch(url)
//             const data = await res.json()
//             return data
//         }))

//         console.log(arrayDePromesas)
//         arrayDePromesas.forEach(pkm => {creadoraDeCards(pkm.name, pkm.sprites.front_default)})
//     } catch (error) {
//         console.error(error)
//     }
// }


// const llamadoraDePokemon = async () => {
//     const resp = await fetch(URL)
//     const data = await resp.json()

//     const urls = data.results.map(pokemon => pokemon.url)

//     llamarDeAUno(urls)
// }

// llamadoraDePokemon()


const URL = 'https://jsonplaceholder.typicode.com/posts';

const pedirPosts = async () => {
    try {
        const resp = await fetch(URL);
        const data = await resp.json();

        data.forEach((post) => {
            const contenedor = document.querySelector('#contenedor');
            const li = document.createElement('li'); // Se crea el elemento li
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>`;
            contenedor.append(li); // Se agrega el li al contenedor
        });
    } catch (error) {
        console.error('Hubo un error al obtener los posts:', error); // Aquí podrías manejar el error de manera específica si lo deseas
    } finally {
        console.log('La solicitud de posts ha finalizado.'); // Se ejecuta siempre, independientemente de si hubo un error o no
    }
};

pedirPosts();