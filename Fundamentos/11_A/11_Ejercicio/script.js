let n = parseInt(prompt("Indicar cantidad de números a ingresar: "))


function sumarPares(limite) {
    let suma = 0
    let array = []
    for (let i = 0; i < array.length; i++) {
         array[i];
        
    }

    for (let i = 0; i <= limite; i++) {
        if (array[i] % 2 == 0) {
            suma += array[i];
        }
        
    }
    return suma;
}

console.log(`De los valores ingresados: ${array.join(" - ")}`)
console.log(`Resultado de suma pares es: ${sumarPares(array)}`)