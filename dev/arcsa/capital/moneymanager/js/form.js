const $form = document.querySelector('#form')

/* function renderUsername(formData) {
    const username = formdata.get('username')
} */

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    /* renderUsername(formData) */
    fetch('/', {
        method: 'POST',
        body: formData,

    })
    debugger
})





