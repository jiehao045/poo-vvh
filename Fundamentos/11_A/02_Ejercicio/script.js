let num = parseInt(prompt("Ingresa un número: "))

function operacion (num) {
    return (num / 3 + 10) * 2;
}

console.log(`El resultado es: ${operacion(num)}`)