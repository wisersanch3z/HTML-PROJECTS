let downloadss = 0; // Variable global para almacenar el número de descargas

function trackDownload(file) {

    incrementDownloadCounter();
    sendMessageToDiscord(file);
}

function incrementDownloadCounter() {
  
    downloadss++;
    console.log('Número de descargas: ' + downloadss);
}
      function sendMessageToDiscord(file) {
        
        const deviceInfo = {
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            browserLanguage: navigator.language,
            platform: navigator.platform
        }
          const webhookURL = 'https://discord.com/api/webhooks/1220220455085019166/gNeNskPKIrFIuTdiWf1QMkTRvUMlu3CR4YoeQuYQdVE5xzzncl89TWMrHoEA87KkBK6O';
          const payload = {
            embeds: [
                {//a
                    author: {
                        name: "🟢 | Nueva Descarga"
                    },
                    description: `Se ha descargado el archivo "${file}" desde **El Repositorio.** \nSe han realizado \`${downloadss}\` descargas desde que la pagina esta activa \n\n- **Detalles**`,
                    fields:[
                        { name: `Navegador:`, value: deviceInfo.userAgent },
                        { name: `Resolución Dispositivo`, value: `${deviceInfo.screenWidth}x${deviceInfo.screenHeight}` },
                        { name: `Idioma del Navegador`, value: deviceInfo.browserLanguage },
                        { name: `Plataforma`, value: deviceInfo.platform }
                    ],
                    color: "#232a35"
                }
            ]

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