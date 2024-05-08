// String
let nombre = "Marcos Santos";

// Number
let numero = 25;
let decimal = 2.5;

// Boolean
let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true, 0 es false

// Array
let paises = ['España', 'México', 'Argentina', 'Francia', 'Andorra']

// Null
let vacio = null;

// Undefined
let no_definido = undefined;

/* console.log(typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof paises,
    paises[0],
    typeof paises[0],
    typeof vacio,
    typeof no_definido
); */


// JSON - JavaScript Object Notation - Objetos literales
let pelicula = {
    titulo: "Space Jam",
    genero: "Animacion",
    year: 1996,
    director: "Tarantino",
    mostrar: function () {
        return `
            **** LA PELICULA DE LA SEMANA **** \n
            Título: ${this.titulo} \n
            Género: ${this.genero} \n
            Año: ${this.year} \n
            Director: ${this.director}
        `;
    }
};

// pelicula.pais = "Estados Unidos";
pelicula["pais"] = "Estados Unidos";
delete pelicula.director;
//delete pelicula.year;
//delete pelicula['year'];
pelicula.genero = null;

console.log("year" in pelicula);

for (let propiedad in pelicula) {
    let dato_actual = pelicula[propiedad]
    if (dato_actual !== null && typeof (dato_actual) !== "function") {
        console.log(dato_actual);
    }
};

// Symbol
let animal = Symbol("lobo");
let animal2 = Symbol("lobo");

let user = {
    id: 1,
    nombre: "Marcos",
    web: "tusigueasipadre.com"
};
let id = Symbol('id');
user[id] = 7;

console.log(user.id, user[id])

