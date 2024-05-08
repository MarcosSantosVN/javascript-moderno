let nombre = "Marcos";

function mostrarNombre() {

    let apellido = "Santos";
    function mostrarApellido() {

        let profesion = "Estudiante";
        function mostrarProfesion() {
            return nombre + " " + apellido + " " +profesion;
        }
        return mostrarProfesion;
    }
    return mostrarApellido;
}

console.log(mostrarNombre()()());