       // JavaScript para ocultar la pantalla de carga después de 1.5 segundos
       document.addEventListener("DOMContentLoaded", function () {
        var pantallaCarga = document.getElementById("pantallaCarga");
        var contenidoPrincipal = document.getElementById("contenidoPrincipal");

        // Simula una carga de recursos (puedes ajustar esto según tus necesidades)
        setTimeout(function () {
            pantallaCarga.style.opacity = 0;
            pantallaCarga.style.pointerEvents = "none";
            contenidoPrincipal.style.display = "block";
            setTimeout(function () {
                contenidoPrincipal.style.opacity = 1;
            }, 100);
        }, 1700);
    });