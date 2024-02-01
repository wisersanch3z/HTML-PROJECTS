document.addEventListener("DOMContentLoaded", function() {
    // Ocultar la pantalla de carga después de 1.3 segundos
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('content').style.display = 'block';
    }, 1100);
});
