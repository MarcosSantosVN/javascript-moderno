let nombres = [
    "Marcos",
    "David",
    "Diego",
    "Capi"
];

// Bucle clásico
/* for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
} */

// for of - accedes al contenido
for (let nombre of nombres) {
    //console.log(nombre);
}

// for in - recorrer JSON - accedes al indice
for (let indices in nombres) {
    //console.log(indices, nombres[indices]);
}

// forEach
/* nombres.forEach(function (nombre_actual, indice) {
    console.log(indice, nombre_actual)
}) */
//nombres.forEach((nombre_actual, indice) => console.log(indice, nombre_actual));

// Recorrer string
let sitioweb = "tusigueasipadre.com"

for (let letra of sitioweb) {
    //console.log(letra);
}

// Iterables
const mi_iterable = nombres[Symbol.iterator]();

//console.log(typeof mi_iterable, mi_iterable);
/* console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next()); */

//JSON
let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno"
};

fruta[Symbol.iterator] = function () {
    let indice = 0;
    let valores = Object.values(this);

    return {
        next() {
            if(indice >= valores.length){
                return{
                    done: true,
                    value: undefined
                };
                
            }

            return{
                done:false,
                value: valores[indice++]

            }
        }
    };
}

for (let propiedad of fruta) {
    console.log(propiedad);
}