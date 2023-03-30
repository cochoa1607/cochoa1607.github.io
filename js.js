const btnCompartir = document.getElementById('btnCompartir');

    btnCompartir?.addEventListener('click', () => {
      share();
    });

    async function share() {
        try {
            let shareData = {
                title: "Title Share MDN.",
                text: "Ejemplo para conpartir un link",
                url: "https://developer.mozilla.org",
            };

            if (!navigator.canShare) {
                alert("navigator.canShare() not supported.");
            } else if (navigator.canShare(shareData)) {
                await navigator.share({
                    title: '@erick_calderon | Linktree',
                    url: 'https://linktree.ee/erick_calderon'
                });
            } else {
                alert("Specified data cannot be shared.");
            }
        } catch (error) {
            console.log('Sharing failed!', error)
        }
}