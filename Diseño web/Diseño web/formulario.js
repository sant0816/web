document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const messageDiv = document.getElementById('message');

    // Validación simple
    if (name === '' || email === '' || comments === '') {
        messageDiv.textContent = 'Por favor, completa todos los campos.';
        messageDiv.classList.remove('hidden');
        return;
    }

    // para validar el correo electrónico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        messageDiv.textContent = 'Por favor, ingresa un email válido.';
        messageDiv.classList.remove('hidden');
        return;
    }

    // Si pasa la validación, muestra el mensaje de éxito
    messageDiv.textContent = 'Mensaje enviado con éxito. ¡Gracias por tu comentario!';
    messageDiv.classList.remove('hidden');

    // para limpiar el formulario
    document.getElementById('messageForm').reset();
});