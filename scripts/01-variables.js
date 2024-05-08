//Variables : var, let, const

//VAR: ambito global o funcional
/* var nombre = "Marcos";
var apellidos = "Santos"

function mostrarNombre(){
    nombre = "Quitos";
    var apellidos = "Muñoz"
    console.log("Dentro", nombre);
    console.log("Dentro", apellidos);
}

mostrarNombre();
console.log("Fuera", nombre);
console.log("Fuera", apellidos); */

//---------------------------------------------------------

//LET: ambito de bloque
/* let pais ="España";

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

if(pais == "España"){
    let continente = "Europa";
    console.log(continente);
}

// No accesible desde fuera del bloque
// console.log("fuera", continente);

for(let contador = 0; contador <= 5; contador++){
    console.log(contador);
}

// No accesible desde fuera del bucle
// console.log("CONTADOR", contador); */

//---------------------------------------------------------

//CONST: crear constantes o variables que su contenido no es variable

let edad = 18;

console.log(edad);

edad = 12;

console.log(edad);

const ciudad = "Badajoz";
const fechaNacimiento = 2000;
console.log(ciudad, fechaNacimiento);