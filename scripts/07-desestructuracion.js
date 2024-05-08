let frutas = ["manzana", "pera", "naranja", "sandía"];

// Clasico
/* let manzana = frutas[0];
let pera = frutas[1]; */

// Desestructurar array
/* let [pera, naranja, sandia] = frutas;
console.log(pera);
 */
// Desestructurar objetos
/* let persona = {
    nombre: "Marcos",
    edad: 23,
    altura: 190,
    pais: "España"
};

let {edad, altura, pais} = persona; */

// Desestructurar string
let usuario = "Marcos Santos 999999999X 01/01/2000 Badajoz";
let [nombre, apellido, dni, fecha, ciudad] = usuario.split(" ");

// Crear varias variables
let lenguaje = "JS",
    framework = "Angular",
    editor = "VSC";

// Utilidad parámetro funciones
function mostrarUsuario({nombre, apellidos = "Desconocido", ciudad = "Cáceres"}) {
    console.log(nombre, apellidos, ciudad);
}

mostrarUsuario({nombre:"Marcos", ciudad: "Madrid"})
