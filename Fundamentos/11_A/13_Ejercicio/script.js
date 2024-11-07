let n = parseInt(prompt("Indicar cantidad de números impares: "))

function imprimirImpares(limite) {
    impares = [];
    sumar = 0;
    for (let i = 1; i <= limite*2; i+=2){
        pares.push(i)
        for (let i = 0; i < impares.length; i++) {
            sumar += impares[i];
        }
       
    }
    console.log(pares.join(" - "))
    return sumar;
}

console.log(`Resultado de suma es: ${imprimirImpares(numero)}`);