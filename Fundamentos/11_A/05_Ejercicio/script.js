let num = parseInt(prompt("Ingrese un número: "));

function numerosNat(n) {
    let array = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        array.push(i);
        suma += i;
    }
    console.log(`Los números naturales son: ${array.join(" + ")} =`);
    return suma;
}

console.log(`La suma es: ${numerosNat(n)}`);