// Strings clasicos
let nombre = "Marcos";
let apellidos = "Santos";
let profesion = "Estudiante"

let nya = nombre + " " + apellidos + "\n" + profesion;
console.log(nya);

// Template Strings
let plantilla = `${nombre} ${apellidos}
${profesion}
`;

console.log(plantilla);
function ficha(nombre, apellidos, profesion) {
    let fichaTecnica = `
    <div class="ficha">
        <h2>${nombre} ${apellidos}</h2>
        <h3>${profesion}</h3>
        <p>Forma parte del equipo de ebcarios de Viewnext</p>
    </div>
`;
    return fichaTecnica;
}

let cajaFichas = document.createElement("section");


cajaFichas.innerHTML = ficha("Marcos", "Santos", "Estudiante");
cajaFichas.innerHTML += ficha("David", "Caceres", "Profesor de Ingles");
cajaFichas.innerHTML += ficha("Alejandro", "Capilla", "Abogado");
document.body.appendChild(cajaFichas);

