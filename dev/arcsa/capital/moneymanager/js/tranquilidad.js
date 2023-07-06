const contentData = [
    { title: 'Inversión mínima sugerida, a partir de $5,000 USD.', description: 'Puedes aumentar tu capital cuando quieras y de esta forma crecerán tus rendimientos.' },
    { title: 'No necesitas tener experiencia en inversiones', description: 'Contamos con un equipo de expertos y partners que invertirán el capital de nuestros socios en los vehículos financieros con el mejor performance.' },
    { title: 'Disponibilidad inmediata de retiros sin penalizaciones', description: 'A partir del primer año puedes disponer del 100% de tu capital sin cargos extra por manejo de cuenta.' },
    { title: 'Invierte en Estados Unidos de forma fácil y segura', description: 'Como socio inversionista, recibes un contrato que respalda tu capital en Miami, Florida; sin necesidad de que tú te traslades desde tu país de residencia.' }
];

function changeContent(index) {
    const illustrationImage = document.getElementById('illustration');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const options = document.querySelectorAll('.option');

    options.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    const imagePaths = ['reglas02.png', 'reglas03.png', 'reglas04.png', 'reglas05.png'];
    illustrationImage.src = imagePaths[index];
    titleElement.textContent = contentData[index].title;
    descriptionElement.textContent = contentData[index].description;
}



/* const imagePaths = ['reglas02.png', 'reglas03.png', 'reglas04.png', 'reglas05.png']; */


