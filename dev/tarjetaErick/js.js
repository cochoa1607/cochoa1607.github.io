const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Compartir Contacto",
                text: "Comparte el contacto de Erick",
                url: "https://erickcalderon.arcsacapital.com/",
            };

            if (!navigator.canShare) {
                alert("navigator.canShare() not supported.");
            } else if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: 'Erick Calderón | Contacto',
                    url: 'https://erickcalderon.arcsacapital.com/'
                });
            } else {
                alert("Specified data cannot be shared.");
            }
        } catch (error) {
            console.log('Sharing failed!', error)
        }
}