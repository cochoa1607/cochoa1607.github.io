const images = document.querySelectorAll('.certificaciones-imagen');

function triggerAnimation(entries) {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.c-img');

        image.classList.toggle('unset', entry.isIntersecting);
    });
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
    observer.observe(image);
});