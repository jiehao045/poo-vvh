console.log("Vinculado");

function numeroPositivoNegativo() {
    let resultado = "";
    let numero = parseInt(prompt("Ingrese un número: "))

    if(numero > 0){
        resultado = (`El número <h2>${numero}</h2> es positivo.`)
    }
    else if(numero <= -1)
        resultado = (`El número <h2>${numero}</h2> es negativo.`)
    else if(numero == 0){
        resultado = (`El número <h2>${numero}</h2> es igual a cero.`)
    }
    document.getElementById('lista').innerHTML = resultado;
}