// Crear set
let gadgets = new Set(["movil", "tablet", "portatil"]);

// Agregar elementos al set
gadgets.add("maquina de afeitar");
gadgets.add("PC sobremesa");
gadgets.add("tv");
gadgets.add("tv");
gadgets.add("tv");
gadgets.add("tv");
gadgets.add("tv");
gadgets.add("chromecast");

console.log(gadgets);

//Sacar el tamaño del set
console.log(gadgets.size);

// Recorrer set
/* for(let item of gadgets){
    console.log(item);
} */

gadgets.forEach(item => console.log(item));

// Eliminar elementos del set
gadgets.delete("tv");
gadgets.delete("movil");

console.log(gadgets.size);

// Comprobar existencia
console.log(gadgets.has("tv"), gadgets.has("tablet"));

//Eliminar set
gadgets.clear();
console.log(gadgets);