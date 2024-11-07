function imprimirImpares(rango) {
    impares = []
    for (let i = 1; i < rango; i+=2) {
        impares.push(i)
    }
    return impares;
}

console.log(imprimirImpares(300).join(" - "));