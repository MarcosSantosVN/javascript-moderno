// Parametros por defecto
function saludo(persona = "Marcos", year = 2024) {

    console.log("Hola, te mando un saludo " + persona + " estamos a " + year);
}
saludo();
saludo('nage', 300);

// Funcioens Flecha
let salu2 = function (nombre) {
    return "Hola, te mando un saludo " + nombre;
}

console.log(salu2("Marcos"));

let salu3 = nombre => "Hola, te mando un saludo " + nombre;
console.log(salu3("David"));

let salu4 = (nombre, pais) => "Hola, te mando un saludo " + nombre + " de " + pais;
console.log(salu4("Diego", "Perú"));

let salu5 = (nombre, pais) => {
    let continente = "América"

    if (pais !== "Perú") {
        continente = "Europa";
    }

    return "Hola, te mando un saludo " + nombre + " de " + pais + " y el continente es " + continente;
}
console.log(salu5("Alejandro", "España"));

// Resumen
function multiplicacion1(n1, n2) {
    console.log(n1 * n2);
}

let multiplicacion2 = (n1, n2) => console.log(n1 * n2);
multiplicacion2(5, 5)


// JSON
let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA", "WWE", "FIFA"],
    mostrar: function () {
        console.log(this.nombre);
    },
    mostrar2() {
        this.videojuegos.forEach(juego =>{

            if (juego == "GTA"){
                console.log("GOTY: ");
            }
            console.log(juego);
        }); 
    },
    mostrar3: () => {
        console.log(tienda.nombre);
    }
}

tienda.mostrar2();