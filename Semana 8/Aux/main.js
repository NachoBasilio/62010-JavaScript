const main = document.getElementById("main")

const creadoraDeCard = (titulo, des) => {
    main.innerHTML += `
        <div>
            <p> ${titulo} </p>
            <p> ${des}</p>
        </div>
    `
}

const llamadoALaAPI = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    data.forEach(el => {
        creadoraDeCard(el.title, el.description)
    })
}

llamadoALaAPI("./data.json")

