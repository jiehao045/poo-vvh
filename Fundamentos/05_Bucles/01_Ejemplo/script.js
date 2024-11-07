console.log("Vinculado");

/* Números del 20 al 10 decreciendo. Implementar while para mostrar una lista de números */
//Ejercicio con While
function contarWhile() {
    let contador = 20;
    let array = [];

    while (contador >= 10) {
        array.push(contador);
        contador--;
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con While:</p> <br><h2> ${array}</h2>`;
}

function contarFor() {
    let array = []

    for (let i = 20; i >= 10; i--){
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `<p>Números del 20 al 10 con For:</p> <br><h2> ${array}</h2>`
}
    
