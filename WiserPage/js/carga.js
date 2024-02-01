document.addEventListener("DOMContentLoaded", function() {
    // Obtener la referencia al elemento loader
    var loader = document.getElementById('loader');
    
    // Ocultar la pantalla de carga después de 1.3 segundos
    setTimeout(function() {
        loader.style.opacity = '0';
        document.getElementById('content').style.display = 'block';
        
        // Eliminar el elemento loader del DOM después de la transición de opacidad
        setTimeout(function() {
            loader.remove();
        }, 1200);
    }, 1100);
});
