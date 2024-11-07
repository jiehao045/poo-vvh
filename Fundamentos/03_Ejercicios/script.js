function modificarMensaje(){
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];

    mensajeModificado.shift();
    mensajeModificado.shift();
    mensajeModificado.unshift("Somos", "Nosotros");
    mensajeModificado.unshift("s");
    mensajeModificado.shift();
    mensajeModificado.pop();
    mensajeModificado.pop();
    mensajeModificado.pop();
    mensajeModificado.push("Los", "mejores", "del mundo");


            const eliminado = [];
            eliminado.unshift("Hola", "a");
            eliminado.push("de", "4to", "C");

            const agregados = [];
            agregados.push("Somos", "Nosotros");
            agregados.push("los", "mejores", "del mundo");

        alert(`Mensaje Original: \n${mensajeInicial}\n \nMensaje Modificado: \n${mensajeModificado}\n \nPalabras Eliminadas: \n${eliminado}\n \nPalabras Agregadas: \n${agregados}`);
    }
    
    
    function operandoMetodos() {
        const arreglo = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        const eliminados = [];
        const agregados = [101, 102, 103];
    
        eliminados.push(arreglo.shift());
        eliminados.unshift(arreglo.pop());
        eliminados.push(arreglo.shift());
        eliminados.unshift(arreglo.pop());
        eliminados.push(arreglo.shift());
    
        for (let i = agregados.length - 1; i >= 0; i--) {
            arreglo.unshift(agregados[i]);
        }
    
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
    
        alert("Arreglo Inicial:\n" + arreglo +
            "\n\nValores Eliminados:\n" + eliminados +
            "\n\nValores Agregados:\n" + agregados +
            "\n\nSuma de los Elementos:\n" + suma);
    }
    