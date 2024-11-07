console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = 2024;
    let fecha_nac = 2004;
    let edad = ahora - fecha_nac;
    alert("Tu edad es: " + edad);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = 9;
    let var2 = var1;
    alert("El valor de la variable es: " + var2);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1', 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    // Tu código aquí
    let num1 = 9;
    let num2 = 24;
    let num3 = 37;
    let res1 = num1 + num2 + num3;
    let res2 = num1 - num3;
    let res3 = num2 * num3;
    let res4 = num1 / 120;
    alert("La suma de todas las variables es: " + res1 + "\n La resta es: " + res2 + "\n La multiplicación es: " + res3 + "\n La división es: " + res4)
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenúltimo carácter en el mensaje. (.length)
    function manipularCadenas() {
    // Tu código aquí
    let direccion = "Av. Santa Rosa";
    let n_casa = "8671";
    let mensaje = "La dirección es: " + direccion + "\n y el número de casa es: " + n_casa;
    let longitud = mensaje.length;
    alert("Mensaje: " + mensaje + "\n Longitud: " + longitud + "\n Antepenúltimo Carácter: " + mensaje[54]);
    }
    // Ejercicio 5: Suma de Valores tomando índices de un arreglo
    // Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones.
    // Mostrar el resultado en el HTML con un Alert
    function sumaIndices() {
        let valor = [1, 2, 3, 4, 5, 6, 7];
        let ultimoValor = valor[valor.length -1];
        let penultimoValor = valor[valor.length -2];
        let primerValor = valor[0];
        suma = ultimoValor + penultimoValor + primerValor;
        alert(`La suma del arreglo es: ${suma}`);
    }