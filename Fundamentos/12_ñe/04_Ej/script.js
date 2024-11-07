let pantalla = document.querySelector(".pantalla");
let botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let botonApretado = boton.textContent;
        // El botón de limpiar todo. Devuelve a cero si se presiona.
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // El botón de borrar. Si aparece el mensaje "Error!" se puede borrar con el botón.
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // El botón de resultado. Si el enunciado no da resultado, dará error.
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch (error) {
                pantalla.textContent = "Error!";
            }
            return;
        }
        
        // El número por defecto y si hay un error, se va a mostrar en pantalla
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        
    })
})