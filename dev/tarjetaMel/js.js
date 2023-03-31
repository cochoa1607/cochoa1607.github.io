const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Compartir Contacto",
                text: "Comparte el contacto de Melissa",
                url: "https://melissaia.github.io/contacto/",
            };

            if (!navigator.canShare) {
                alert("navigator.canShare() not supported.");
            } else if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: 'Melissa Flores | Contacto',
                    url: 'https://melissaia.github.io/contacto/'
                });
            } else {
                alert("Specified data cannot be shared.");
            }
        } catch (error) {
            console.log('Sharing failed!', error)
        }
}