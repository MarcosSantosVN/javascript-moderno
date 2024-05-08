let personas = ["Victor", "Paco", "Pepe", "Juan", "Antonio"];
let paises = [{
    nombre: "España",
    continente: "Europa"
},
{
    nombre: "Francia",
    continente: "Europa"
},
{
    nombre: "Italia",
    continente: "Europa"
}];

// Some
let existeAlguno = personas.some(nombre => nombre === "Fran");
console.log(existeAlguno)

// Every
let esIgualEnTodos = paises.every(pais => pais.continente === "Europa");
console.log(esIgualEnTodos);

// Map
let nuevas_personas = personas.map(persona => "Hola "+persona);
console.log(nuevas_personas);

// Reduce
console.log(personas.reduce((accumulador, actual) => {
    let valor_actual = ", "+actual
    return accumulador+valor_actual;
}))