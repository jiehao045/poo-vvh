console.log("Vinculado");

/* Realiza un programa que emplee un bucle 'for' para encontrar los N primeros números pares, en donde N es ingresado por el usuario. Muestra este resultado en una página HTML.*/
//Ejercicio con For
function contarFor() {
    let números = parseInt(prompt("Ingrese la cantidad de números que quiera encontrar como par: "));
    let arrayNumeros = [];

    for (let i = 1; i <= números; i++) {
        arrayNumeros.push(i*2);
        
    }
}
document.getElementById("lista").innerHTML = `<p>Los primeros números pares son:</p> <h2>${arrayNumeros}</h2>`

