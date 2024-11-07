console.log("Vinculado");

function temperaturaActualCelsius() {
    //Identificar si el número es mayor
    let resultado = "";
    let temperatura = prompt("Ingrese la temperatura actual:")

    if(temperatura <= 0){
        resultado = `Hace frío - la temperatura que has ingresado: <h2>${temperatura}</h2>`;
        } else if (temperatura <= 25) {
        resultado = `La temperatura es agradable. - la temperatura que has ingresado: <h2>${temperatura}</h2>`;
        } else if (temperatura >= 25) {
            resultado = `Hace calor. - la temperatura que has ingresado: <h2>${temperatura}</h2>`;
        }
    document.getElementById('lista').innerHTML = resultado;
}