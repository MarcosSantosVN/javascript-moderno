let persona = {
    nombre: "Marcos",
    apellido: "Santos",
    domicilio: {
        pais: "España",
        ciudad:{
            nombre: "Cáceres",
            provincia: "Cáceres"
        }
    }
}

//let comprobar_provincia = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.provincia

let comprobar_provincia = persona?.domicilio?.ciudad?.provincia == undefined ? false : true;

console.log(comprobar_provincia);