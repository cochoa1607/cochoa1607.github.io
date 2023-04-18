const btnCompartir = document.getElementById('btnCompartir');

btnCompartir?.addEventListener('click', () => {
    share();
});

async function share() {
    try {
        let shareData = {
            title: "Compartir CV",
            text: "Comparte el CV de Carlos Ochoa",
            url: "https://cochoa1607.github.io/dev/cv/",
        };

        if (!navigator.canShare) {
            alert("navigator.canShare() not supported.");
        } else if (navigator.canShare(shareData)) {
            await navigator.share({
                title: 'Carlos Ochoa | CV',
                url: 'https://cochoa1607.github.io/dev/cv/'
            });
        } else {
            alert("Specified data cannot be shared.");
        }
    } catch (error) {
        console.log('Sharing failed!', error)
    }
}