function sumar(rango) {
    let suma = 0;
    let array = [];
    let input = 0;
    for (let i = 0; i < rango; i++) {
        input = parseInt(prompt("Ingrese un número: "))
        suma += input;
        array.push(input);
    }
    console.log(`Valores: ${array.join(" + ")} = `);
    return suma;
}
console.log(`Total: ${sumar(array)}`)