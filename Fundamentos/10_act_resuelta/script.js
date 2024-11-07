function encontrarMayorYMenor(array) {
    let mayor = array[0];
    let menor = array[0];
    
    for (let i = 1; i < array.length; i++) {
        
        if (array[i] > mayor) {
            mayor = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    
    return { mayor, menor };
}

let numeros = [3, 5, 7, 2, 200, 33, 100, 3, 400];
let resultado = encontrarMayorYMenor(numeros);
alert(`Número mayor: ${resultado.mayor}\nNúmero menor: ${resultado.menor}`);
console.log("aloh");
