console.log("Vinculado");

/* Desarrolla un programa que emplee un bucle 'while' para calcular la suma de los números del 1 al 10. */
//Ejercicio con While
function contarWhile() {
    let contador = 1;
    let array = [];
    let suma = 0;

    while (contador <= 10) {
        array.push(contador);
        suma += contador;
        contador++;
        

    }
    document.getElementById("lista").innerHTML = `<p>Suma del 0 al 10 con While:</p> <h3>${array.join("+")}</h3>\n<h2>${suma}</h2>`;
}
