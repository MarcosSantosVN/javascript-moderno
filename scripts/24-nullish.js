// Nullish coalescing operator

function multiplicacion(numero1, numero2) {
    /* numero1 = (numero1 == null ? 1 : numero1)
    numero2 = (numero2 == null ? 1 : numero2) */

    numero1 = numero1 ?? 1;
    numero2 = numero2 ?? 1;

    return numero1 * numero2;
}

console.log(multiplicacion(5,5));


function mostrarUsuario(id = 0, nombre = "Usuario desconocido") {

    /* id = id ?? 0;
    nombre = nombre ?? "Usuario desconocido"; */

    return id+" "+nombre;
}

console.log(mostrarUsuario(5, "Marcos"))