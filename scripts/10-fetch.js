window.addEventListener("DOMContentLoaded", event => { //Esto es si el <script> está en el head en lugar de en el body
    let caja = document.querySelector("#contenedor");
    caja.innerHTML = "Cargando...";

    // Petición ajax moderna
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(items => {
            console.log(items);
            caja.innerHTML = "";
            mostrar(caja, items);
        })
        .catch(error => {
            console.log("la petición ajax ha fallado");
        });

    // DOM
    function mostrar(contenedor, elementos) {

        elementos.forEach(elemento => {
            let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            <article>
            <hr/>
        `;
            contenedor.innerHTML += muestrame;
        });

        return elementos;
    }
});



