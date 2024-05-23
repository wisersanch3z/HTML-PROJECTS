document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const materia = document.getElementById('materia').value;
    const fechaDejo = document.getElementById('fechaDejo').value;
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    const tipo = document.getElementById('tipo').value;
    const periodo = document.getElementById('periodo').value;
    const correo = document.getElementById('correo').value;
    const archivo = document.getElementById('archivo').files[0];

    const webhookUrl = 'https://discord.com/api/webhooks/1243028360616214588/p3a88uz4v9kKPvBkSre4lymhXpkEBLDzaPdtz-3pWf2T9IegWQxU1yL-yOmDkpLC5BMi';

    const embed = {
        title: "Nuevo Archivo Subido",
        color: 7506394, 
        fields: [
            { name: "Nombre Aportador", value: nombre, inline: false },
            { name: "Materia", value: materia, inline: false },
            { name: "Periodo", value: periodo, inline: true },
            { name: "Fecha que lo dejó", value: fechaDejo, inline: true },
            { name: "Fecha de entrega", value: fechaEntrega, inline: true },
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
//subida de archivo a aparte, ¿por que? por que discord es un maldito
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('uploadForm'));

    const webhookUrl = 'https://discord.com/api/webhooks/1243028360616214588/p3a88uz4v9kKPvBkSre4lymhXpkEBLDzaPdtz-3pWf2T9IegWQxU1yL-yOmDkpLC5BMi';

   
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

 

    // Enviar el FormData
    xhr.send(formData);
});
