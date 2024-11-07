let displayValue = '', operations = [];
let re = document.querySelector("#display");
let igual = document.getElementById("resultado");

function press(id) {
    

    re.innerHTML += id;
    
    displayValue += id  ;
    
}

function setOP(op) {

    if (displayValue !== '') {
        operations.push(parseFloat(displayValue));
        operations.push(op);
        displayValue = '';
        
        re.innerHTML = operations.join(' ');
        
    }
}


igual.onclick = function() {
    if (displayValue !== '') {
        operations.push(parseFloat(displayValue));
    }
    
    let resultado = operations[0];
    
    for (let i = 1; i < operations.length; i += 2) {
        const op = operations[i];
        const nextNumber = operations[i + 1];
        
        if (op === '*') {
            resultado *= nextNumber;
        } else if (op === '/') {
            resultado /= nextNumber;
        } else if (op === '+') {
            resultado += nextNumber;
        } else if (op === '-') {
            resultado -= nextNumber;
        }
    }
    
    re.innerHTML = resultado;
    operations = []; // Reiniciar con el resultado
    displayValue = resultado;
};

function clr() {
    displayValue = '';
    operations = [];
    re.innerHTML = '';
}