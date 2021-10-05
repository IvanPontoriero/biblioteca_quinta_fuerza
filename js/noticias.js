//Se consume API para traer datos de la posición instantánea de la ISS
const URLGET = 'http://api.open-notify.org/iss-now.json'

$('#news__api--container').hide()

$('#btn__news--api').click( (e) => {
    e.preventDefault()

    $('#btn__news--api').fadeOut(1000)

    fetch(URLGET)
    .then(response => response.json() )
    .then(data => {
        $('#news__api--container').fadeIn(1000).append(`
        <h3>Marca de tiempo: ${data.timestamp}</h3>
        <p> Latitud: ${data['iss_position']['latitude']} - Longitud: ${data['iss_position']['longitude']}</p>
        <img src='../multimedia/ISS.jpg'></img>
        `)
    })
    .catch(err => console.log(err))
})
