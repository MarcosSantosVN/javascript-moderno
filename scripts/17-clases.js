// Molde
class Coche {

    #npuertas = 3;
    _nplazas = 5;

    // Método que se ejecuta primero
    constructor(marca,
        modelo,
        color,
        velocidad,
        year
    ) {
        // Propiedades o atributos
        this.marca = marca;
        this.modelo = modelo
        this.color = color;
        this.velocidad = velocidad;
        this.year = year
    }

    //Metodos - acciones o las funcionalidades del objeto
    subirVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }

    // Metodos SET y GET (setters y getters)
    /* setMarca(marca) {
        this.marca = marca;
    }

    getMarca() {
        return this.marca;
    } */

    set guardarMarca(marca) {
        this.marca = marca;
    }

    get devolverMarca() {
        return this.marca;
    }

    getNPuertas() {
        return this.#npuertas;
    }

    getNPlazas() {
        return this._nplazas;
    }

    // Método estático
    static saludar(nombre) {
        return "Hola " + nombre;
    }


}

// Crear objeto
/* let mi_coche = new Coche("Audi", "C4", "Rojo", 100, 2023);

mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.reducirVelocidad();

console.log(mi_coche.marca, mi_coche.modelo, mi_coche.color, mi_coche.velocidad + "km");


mi_coche.guardarMarca = "Toyota";
console.log(mi_coche.devolverMarca);


console.log(Coche.saludar("Marcos"));

console.log(mi_coche.getNPuertas(), mi_coche.getNPlazas()); */

// Herencia
class Quad extends Coche {
    constructor(marca, modelo, color, velocidad, year, cilindrada) {
        super(marca, modelo, color, velocidad, year);
        this.cilindros = cilindrada;
    }

    saltar() {
        return "Has saltado una rampa";
    }

}

let mi_quad = new Quad("Suzuki", "Loquesea", "Rojo", 200, 2025, 700);

mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();

mi_quad.guardarMarca = "Peugeot";

console.log(mi_quad, mi_quad.saltar());
