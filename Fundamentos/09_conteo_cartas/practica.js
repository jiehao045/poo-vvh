let count = 0;

function cartas() {
    let cardInput = document.getElementById('cardInput').value.trim().toUpperCase();

    // Dividir la entrada por comas para obtener una lista de cartas
    let cards = cardInput.split(',').map(card => card.trim()); // El método 'split' divide la cadena en un arreglo de sub-cadenas, utilizando un separador en específico como coma (,)

    cards.forEach(card => { //Es un método que repite el proceso para cada elemento del arreglo
        let cardValue;

        // Verificar si es un número del 2 al 9
        if (!isNaN(card) && parseInt(card) >= 2 && parseInt(card) <= 9) { //&& es un operador lógico que se utiliza para verificar si todas las condiciones individuales son 'true'
            cardValue = parseInt(card);
        } else {
            // Si no es un número del 2 al 9, verificar si es una carta especial
            switch (card) {
                case '10':
                case 'J':
                case 'Q':
                case 'K':
                case 'A':
                    cardValue = card;
                    break;
                default:
                    alert('Ingrese cartas válidas separadas por comas (2-9, 10, J, Q, K, A)');
                    return;
            }
        }

        // Realizar el conteo basado en el valor de la carta
        switch (cardValue) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case '10':
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                count--;
                break;
            case 7:
            case 8:
            case 9:
                break;
        }
    });

    let result = document.getElementById('result');

    if (count > 0) {
        result.textContent = count + " Bet";
    } else {
        result.textContent = count + " Hold";
    }

    document.getElementById('cardInput').value = ''; // Limpiar el campo de entrada después de contar
}
