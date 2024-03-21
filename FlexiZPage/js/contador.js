let downloadss = 0; // Variable global para almacenar el número de descargas

function trackDownload(file) {
    // Incrementa el contador de descargas
    incrementDownloadCounter();

    // Envía el mensaje a Discord
    sendMessageToDiscord(file);
}

function incrementDownloadCounter() {
    // Se podría implementar un sistema de almacenamiento persistente aquí, como cookies o localStorage,
    // para mantener un registro del número de descargas. En este ejemplo, simplemente mostraremos el contador en la consola.
    downloadss++;
    console.log('Número de descargas: ' + downloadss);
}
      function sendMessageToDiscord(file) {
          const webhookURL = 'https://discord.com/api/webhooks/1220220455085019166/gNeNskPKIrFIuTdiWf1QMkTRvUMlu3CR4YoeQuYQdVE5xzzncl89TWMrHoEA87KkBK6O';
          const payload = {
              content: `Se ha descargado el archivo "${file}" desde **El Repositorio.** \nSe han realizado \`${downloadss}\` desde que la pagina esta activa`
          };

          fetch(webhookURL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
          })
          .then(response => {
              if (response.ok) {
                  console.log('Mensaje enviado correctamente a Discord');
              } else {
                  throw new Error('Error al enviar el mensaje a Discord');
              }
          })
          .catch(error => {
              console.error(error);
          });
      }