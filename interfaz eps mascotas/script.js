document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada y lista');

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const contraseña = document.getElementById('contraseña').value;

            if (!nombre || !email || !contraseña) {
                alert('Por favor, completa todos los campos.');
                event.preventDefault();
            }
        });
    }
});


