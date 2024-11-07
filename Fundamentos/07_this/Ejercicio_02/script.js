// Lección 6: usar 'this' para cambiar texto y atributos
function changeImage(element) {
    //Cambiar la imagen y texto alternativo
    element.src = 'https://via.placeholder.com/200/0000FF/808080';
    element.alt = 'Nueva imagen';
}

// Lección 7: usar 'this' para mostrar descripciones
function showDescription(button) {
    //Alternar la visualización de la descripción
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}

// Lección 8: usar this para cambiar estilos
function completeTask(button) {
    // Marcar una tarea como completada
    let taskItem = button.parentElement;
    let tasktext = taskItem.querySelector('span');
    tasktext.classList.toggle ('completed');
}

//Lección 9 y 10: Interacciones más complejas
function applyDiscount(button) {
    // Aplicar un descuento al precio del producto
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat (priceElement.textContent.replace('$',''));
    let newPrice = (currentPrice * 0.9) .toFixed (2);
    priceElement.textContent = `$${newPrice}`;
}