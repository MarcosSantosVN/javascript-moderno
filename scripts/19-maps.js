const antiguos_gadgets = {
seis: "radiocassette",
siete: "telefono sobremesa",
ocho: "copac disc"
};

const gadgets = new Map(Object.entries(antiguos_gadgets));
//const gadgets = new Map();

gadgets.set(1, "PC");
gadgets.set(2, "YV")
.set(3, "Tablet")
.set("cuatro", "Movil")
.set("cinco", "Laptop")

console.log(gadgets.get("seis"));

console.log(gadgets.has(2));
console.log(gadgets.has("Laptop"));