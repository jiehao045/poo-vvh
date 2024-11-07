console.log("Vinculado");

function valorarPuntuacion() {
    let resultado = "";
    let puntuacion = parseInt(prompt("Ingrese su puntuación: "));

    if (puntuacion >= 90) {
        resultado = `<h2>¡Excelente!</h2>  Tu puntuación es de: <h2>${puntuacion}</h2>`;
    }
    else if(puntuacion <=89 && puntuacion >= 70) {
        resultado = `<h2>¡Buen trabajo!</h2>  Tu puntuación es de <h2>${puntuacion}</h2>`;
    }
    else if (puntuacion < 70) {
        resultado = `<h2>¡Necesitas mejorar!</h2>  Tu puntuación es de <h2>${puntuacion}</h2>`;
    }
    else
        resultado = `<h2>Has ingresado un valor incorrecto, ya sea una letra o un carácter especial.</h2>`;
    
    document.getElementById('lista').innerHTML = resultado;
}