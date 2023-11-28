const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Compartir Contacto",
                text: "Comparte el contacto de Daniel",
                url: "https://danielrivas.arcsacapital.com/",
            };

            if (!navigator.canShare) {
                alert("navigator.canShare() not supported.");
            } else if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: 'Daniel Rivas | Contacto',
                    url: 'https://danielrivas.arcsacapital.com/'
                });
            } else {
                alert("Specified data cannot be shared.");
            }
        } catch (error) {
            console.log('Sharing failed!', error)
        }
}