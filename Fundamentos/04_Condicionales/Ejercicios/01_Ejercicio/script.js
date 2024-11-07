console.log("Vinculado");

function identificarNumeroMayor() {
    //Identificar si el número es mayor
    let resultado = "";
    let numero1 = parseInt(prompt("Por favor, ingrese su primer número:"));
    let numero2 = parseInt(prompt("Por favor, ingrese su segundo número:"));

    if(numero1 > numero2){
        resultado = `El primer número es mayor que el segundo número. -  <h2>${numero1}</h2>`
        } else if (numero2 > numero1) {
        resultado = `El segundo número es mayor que el primer número. -  <h2>${numero2}</h2>`
        }
        else {
            resultado = ("El valor ingresado es incorrecto.")
        }
    document.getElementById('lista').innerHTML = resultado;
}