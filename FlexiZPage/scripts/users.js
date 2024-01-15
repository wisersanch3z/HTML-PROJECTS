document.addEventListener('DOMContentLoaded', function() {
    // Reemplaza 'YOUR_TOKEN' y 'YOUR_CLIENT_ID' con tus propias credenciales
    const token = 'MTAxMTY5NzIxMDIwOTA4MzUzNA.GgA2CH.8B8fxOwDVD0pZmJuFciQ3f5VUAe6Q7mCryYB-o';
    const clientId = '540398056588181507';

    // Endpoint para obtener la información del usuario
    const endpoint = `https://discord.com/api/v9/users/${clientId}`;

    // Headers con el token de autenticación
    const headers = new Headers({
        'Authorization': `Bot ${token}`,
    });

    // Opciones para la solicitud fetch
    const options = {
        method: 'GET',
        headers: headers,
    };

    // Realizar la solicitud fetch a la API de Discord
    fetch(endpoint, options)
        .then(response => response.json())
        .then(data => {
            // Actualizar la información del perfil en la página
            const profileInfo = document.getElementById('profileInfo');
            profileInfo.innerHTML = `
                <img src="https://cdn.discordapp.com/avatars/${clientId}/${data.avatar}.png" alt="Avatar">
                <p>Nombre de Usuario: ${data.username}</p>
                <p>ID de Usuario: ${data.id}</p>
            `;
        })
        
});