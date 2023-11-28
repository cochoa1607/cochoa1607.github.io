const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Compartir Contacto",
                text: "Comparte el contacto de Oscar",
                url: "https://oscarchaparro.arcsacapital.com/",
            };

            if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: 'Oscar Chaparro | Contacto',
                    url: 'https://oscarchaparro.arcsacapital.com/'
                });
            } 
        } catch (error) {
            console.log('Try again later', error)
        }
}