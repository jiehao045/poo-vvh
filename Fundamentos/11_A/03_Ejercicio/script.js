let num1 = parseInt(prompt("Ingresa el primer número: "))
let num2 = parseInt(prompt("Ingrese el segundo número: "))

function check(num1, num2) {
    if (num1 > num2) {
        console.log(`El ${num1} es mayor que ${num2}`)
    } else {
        console.log(`El ${num2} es mayor que ${num1}`)
    }
}

check(num1, num2)