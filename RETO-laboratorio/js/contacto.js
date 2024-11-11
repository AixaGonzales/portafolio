document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Evita que el formulario se envíe sin validación

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validación simple
    if (name === '' || email === '') {
        document.getElementById('message').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').textContent = '¡Formulario enviado con éxito!';
        document.getElementById('message').style.color = 'green';
    }
});
