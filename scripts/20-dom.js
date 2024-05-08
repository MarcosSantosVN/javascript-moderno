// Seleccionar elementos con ID
// Seleccionar elemetos con una CLASE


//let contenedor = document.getElementById("contenedor");
//let contenedor = document.querySelectorAll("#contenedor");
let contenedores = document.querySelectorAll(".container");

/* contenedores.forEach((elemento, indice) => {
    elemento.innerText = `Hola soy un texto ${indice} desde JS`;
    elemento.className = "ficha";

    if(indice === 2){
        elemento.style.background = "orange";
    }
});
 */

for(let indice in contenedores){
    contenedores[indice].innerText = `Hola soy un texto ${indice} desde JS`;
    contenedores[indice].className = "ficha";

    if(parseInt(indice) === 2){
        contenedores[indice].style.background = "orange";
    }
}




