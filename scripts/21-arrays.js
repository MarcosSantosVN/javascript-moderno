let personas = ["Victor", "Paco", "Pepe", "Juan", "Antonio"];

// Buscar en un array - find
//let busqueda = personas.find(persona => persona === "Fran");

// Buscar en un array - findIndex
let busqueda = personas.findIndex(persona => persona === "Juan")

console.log(busqueda);

// Crear array basandome en un objeto iterable
let array_letras = Array.from("tusigueasipadre.com");
console.log(array_letras);

let array_numeros_cuadrados = Array.from([1,2,3,4,5,6], numero => Math.pow(numero, 2));
console.log(array_numeros_cuadrados);

// Comprobar si existe un elemento dentro de un array- includes
console.log(personas.includes("Marcos"));

// Filtrar arrays - filter
//let nuevas_personas = personas.filter(persona => persona.length >= 5);
let nuevas_personas = personas.filter(persona => persona.includes("a"));
console.log(nuevas_personas);