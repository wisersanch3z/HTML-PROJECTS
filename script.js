document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const nombreMateria = document.getElementById('nombreMateria').value;
    const fechaDejo = document.getElementById('fechaDejo').value;
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    const tipo = document.getElementById('tipo').value;
    const correo = document.getElementById('correo').value;
    const archivo = document.getElementById('archivo').files[0];

    const webhookUrl = 'https://discord.com/api/webhooks/1243028360616214588/p3a88uz4v9kKPvBkSre4lymhXpkEBLDzaPdtz-3pWf2T9IegWQxU1yL-yOmDkpLC5BMi';

    const embed = {
        title: "Nuevo Archivo Subido",
        color: 7506394,  // Color en decimal (0x72A0C1 en hexadecimal)
        fields: [
            { name: "Nombre", value: nombre, inline: false },
            { name: "Nombre Materia", value: nombreMateria, inline: false },
            { name: "Fecha que lo dejó", value: fechaDejo, inline: false },
            { name: "Fecha de entrega", value: fechaEntrega, inline: false },
            { name: "Tipo", value: tipo, inline: false },
            { name: "Correo", value: correo, inline: true }
     
        ]
    };

    const formData = new FormData();

    formData.append('archivo', archivo);

    const requestOptions = {
        method: 'POST',
        body: formData
    };

    const payload = {
        embeds: [embed]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload, requestOptions)
    })
    .then(response => {
        if (response.ok) {
            alert(
                'Información enviada con éxito.  Te avisaremos si es aceptado!');
        } else {
            alert('Error al enviar la información.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar la información.');
    });
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('uploadForm'));

    const webhookUrl = 'https://discord.com/api/webhooks/1243028360616214588/p3a88uz4v9kKPvBkSre4lymhXpkEBLDzaPdtz-3pWf2T9IegWQxU1yL-yOmDkpLC5BMi';

    // Crear un objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 204) {
            alert('Archivo e informacion enviado');
        } else {
            alert('Error al enviar la información.');
        }
    };

    xhr.onerror = function () {
        alert('Error al enviar la información.');
    };

    // Enviar el FormData
    xhr.send(formData);
});
