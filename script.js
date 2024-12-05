// Seleccionamos el botón y el párrafo
const button = document.getElementById('changeTextButton');
const message = document.getElementById('message');

// Agregamos un evento al botón
button.addEventListener('click', () => {
    // Cambiamos el texto del párrafo cuando se haga clic
    message.textContent = "¡El texto ha cambiado!";
});
