console.log("Vinculado");

/* Escribe un programa que utilice un bucle 'for' para mostrar el número mayor en una página HTML. */
//Ejercicio con For
function contarFor() {
    let array = [];
    let numeroMayor = 0;
    

    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt("Ingrese un número para determinar el número mayor: "));
        array.push(num);
        if (numeroMayor < num) numeroMayor = num;
    }
    //numeroMayor = (numeroMayor < num) ? numeroMayor : num;
    document.getElementById("lista").innerHTML = `<p>De los 5 números que ha ingresado:</p> <h2>${array.join(", ")}</h2> <h2>Número mayor: ${numeroMayor}</h2>`;
    }
    

