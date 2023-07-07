//Lista
let imageList = document.getElementById('image-list').getElementsByTagName('li');
let currentIndex = 0;

function changeImageStyle() {
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].querySelector('div').classList.remove('active');
    }

    imageList[currentIndex].querySelector('div').classList.add('active');

    currentIndex = (currentIndex + 1) % imageList.length;
};

setInterval(changeImageStyle, 2500);
changeImageStyle();