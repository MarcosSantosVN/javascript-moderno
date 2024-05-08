let persona = ["Marcos Santos", 23];

if (persona[1] >= 18){
    console.log("Es mayor de edad");
} else{
    console.log("Es menor de edad");
}

// Operador ternario
let edad = (persona[1] >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(edad);

let existe = persona ? "existe" : "no existe"
console.log(existe);

// Diferencia entre == y ===, y != y !===
let edad1 = 80;
let edad2 = "80";

if(edad1 === edad2){
    console.log("Edades iguales")
} else{
    console.log("Edades distintas")
}