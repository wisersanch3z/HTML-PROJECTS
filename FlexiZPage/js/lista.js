// script.js

function buscarPalabra() {
    // Obtener el valor ingresado por el usuario
    var busqueda = document.getElementById('busqueda').value.toLowerCase();

    // Obtener la lista de palabras
    var lista = document.getElementById('listaPalabras').getElementsByTagName('li');

    // Buscar la palabra en la lista
    var encontrada = false;
    for (var i = 0; i < lista.length; i++) {
        var palabra = lista[i].textContent.toLowerCase();
        if (palabra.includes(busqueda)) {
            encontrada = true;
            break;
        }
    }

    // Mostrar el resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = encontrada ? '<span class="resultado">Palabra encontrada</span>' : 'Palabra no encontrada';
}
