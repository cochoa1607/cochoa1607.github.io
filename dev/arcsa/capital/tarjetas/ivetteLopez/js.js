const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Compartir Contacto",
                text: "Comparte el contacto de Ivette",
                url: "https://ivettelopez.arcsacapital.com/",
            };

            if (!navigator.canShare) {
                alert("navigator.canShare() not supported.");
            } else if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: 'Ivette López | Contacto',
                    url: 'https://ivettelopez.arcsacapital.com/'
                });
            } else {
                alert("No se puede compartir.");
            }
        } catch (error) {
            console.log('Sharing failed!', error)
        }
}