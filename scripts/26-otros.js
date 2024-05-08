// Sepaeadores numéricos
let numero = 5_000_000_000;
console.log(typeof numero, numero);

// Replace y ReplaceAll
let frase = "Voy en mi moto contento por la carretera y veo otra moto"
//let nueva_frase = frase.replace("moto", "coche");
let nueva_frase = frase.replaceAll("moto", "coche");
console.log(nueva_frase);

// Asignadores lógicos
let nombre = null;
let id = 25;

//nombre = nombre || edad;
//nombre ||= id;

nombre ??= id;

nombre *= 2;

console.log(nombre);