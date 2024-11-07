console.log("Vinculado")

/* Recibir un arreglo numérico con números negativos y positivos. 
Todos los valores negativos reemplazarlos por 0. */

function noNegative(arr) {
    let numeros = parseInt(prompt("Ingrese los números a trabajar: "))
    let array = [];


    for (let i = 0; i < numeros; i++) {
        let num = parseInt(prompt("Ingrese los números negativos o positivos: "))
        array.push(num);
    }
    
    let original = [...array];
    for (let i = 0; i < numeros; i++) {
        if (array[i]);
        
    }
};


document.getElementById("lista").innerHTML = `<p>Arreglo</p> <h2>${array}</h2>`;