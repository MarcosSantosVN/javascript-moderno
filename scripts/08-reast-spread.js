// Spread
let heroes = ["Batman", "Spiderman", "Superman", "Venom", "Aquaman"];

console.log(heroes[0], heroes[1], heroes[2]);

console.log(...heroes);

function mostrarHeroes(heroe1, heroe2) {
    console.log(`
        ****Mis heroes favs****
            - ${heroe1}
            - ${heroe2}
        fin.
    `);
}

mostrarHeroes(...heroes);

let superheroes = ["flash", "catwoman", ...heroes]

console.log(superheroes);

// Rest
function peliculas(pelicula1, pelicula2, ...restoPeliculas){
    console.log(pelicula1);
    console.log(pelicula2);
    for(pelicula of restoPeliculas){
        console.log(pelicula);
    }
    
}

peliculas("ESDLA", "F&F", "Venom", "Spiderman", "The Witcher");