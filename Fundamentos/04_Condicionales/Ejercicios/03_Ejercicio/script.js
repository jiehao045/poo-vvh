console.log("Vinculado");

function nombreUsuarioContraseña() {
    //Identificar si el usuario y contraseña son correctos
    let resultado = "";
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");
    
    const usuario = "usuario123"
    const password = "secreto"

    if(nombreUsuario == usuario && contraseña == password) {
        resultado = `<h2>¡Acceso concedido!</h2>`
        } else {
        resultado = `<h2>Acceso denegado.</h2> `
        };
        
    document.getElementById('lista').innerHTML = resultado;
}