// Swal.fire({
//     title: "Todo mal",
//     icon: "success",
//     toast: true,
//     position: "top-start"
// });


const botonSwal = document.getElementById("boton")

botonSwal.addEventListener("click", ()=>{
    Swal.fire({
    title: "Todo mal",
    icon: "success",
    toast: true,
    position: "top"
});
})

document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){

    }
})
Swal.fire({
    title: "¿Aguante Messi?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Si, aguante Messi",
    denyButtonText: `No, soy pecho frio`
}).then((result) => {
    if(result.isConfirmed){
        Swal.fire("Aguante Messi")
    }else if(result.isDenied){
        Swal.fire("Anda pa'ya bobo")
    }else{
        Swal.fire("Tabien, pero te estoy mirando")
    }
});