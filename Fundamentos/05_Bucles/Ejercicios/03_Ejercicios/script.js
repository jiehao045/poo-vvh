console.log("Vinculado");

/* Desarrolla un programa que emplee un bucle while para calcular la suma de los números del 1 al 10. */
//Ejercicio con While
function contarWhile() {
    let contador = 0;
    let array = [];
    

    while (contador <= 10) {
        array.push(contador);
        contador+=2;
        

    }
    document.getElementById("lista").innerHTML = `<p>Suma del 0 al 10 con While:</p> <br><h2>${array}</h2>`;
}
