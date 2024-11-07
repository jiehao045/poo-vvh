function imprimirM3(limite) {
    array = []
    sumar = 0
    // Guardar números capturados
    for (let i = 0; i < limite; i++) {
        let input = parseInt(prompt(`Ingrese valor ${i} de ${limite}`))
        if (input <= 0) {
            alert("Ingrese un valor sobre 0.")
            return console.log("Error")
        } else if (input > 0) {
            array.push(input)
        } else {
            alert("Ingrese un valor numérico")
            return console.log("Error")
        }
        array.push(i);
    }
    // Separar números multiplos de 3
    for (let i = 0; i < pares.length; i++) {
        if (array[i] % 3 === 0) {
            sumar += array[i];
            mult3.push(array[i]);
        }
    }
    console.log(`Valores ingresados: ${array.join(" - ")}`)
    console.log(`Valores multiplos de 3: ${mult3.join(" - ")}`)
    return sumar;
}
let numero = parseInt(prompt("Indicar cantidad de números a trabajar (multiplos de 3)"))
console.log(`Resultado de suma es: ${imprimirM3(numero)}`)