let nombre = prompt("Escriba su nombre: ");
let apellido = prompt ("Escriba su apellido: ");
let edad = prompt ("Escriba su edad: ");

function mostrarDatos(nombre, apellido, edad) {
    console.log(`El nombre completo es ${nombre} apellido ${apellido}`);
    console.log(`Su edad es: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);