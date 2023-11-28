window.addEventListener('scroll', function () {

    var seccion = document.querySelectorAll('.animUp');

    for (var i = 0; i < seccion.length; i++) {

        var altura = window.innerHeight / 1.4;

        var distancia = seccion[i].getBoundingClientRect().top;

        seccion[i].classList.add('transform_up')

        if (distancia <= altura) {

            seccion[i].classList.add('aparece');

        }

    }



    var seccionLeft = document.querySelectorAll('.animLeft');

    for (var i = 0; i < seccionLeft.length; i++) {

        var altura = window.innerHeight / 1.4;

        var distancia = seccionLeft[i].getBoundingClientRect().top;

        seccionLeft[i].classList.add('transform_left')

        if (distancia <= altura) {

            seccionLeft[i].classList.add('aparece');

        }

    }



    var seccionRight = document.querySelectorAll('.animRight');

    for (var i = 0; i < seccionRight.length; i++) {

        var altura = window.innerHeight / 1.4;

        var distancia = seccionRight[i].getBoundingClientRect().top;

        seccionRight[i].classList.add('transform_right')

        if (distancia <= altura) {

            seccionRight[i].classList.add('aparece');

        }

    }

})