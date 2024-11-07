function imprimirPares(rango) {
    pares = []
    for (let i = 2; i <= rango; i+=2){
        pares.push(i)
       
    }
    return pares;
}

console.log(imprimirPares(200).join(" - "));