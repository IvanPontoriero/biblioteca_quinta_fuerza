// Variables Globales
let nombre = document.getElementById('nombre_apellido')
let nombreIngresado = nombre.value
let email = document.getElementById('email')
let enviar = document.getElementById('enviar')
let bienvenida = document.getElementById('bienvenida')
let checkbox = document.getElementById('checkbox')

//Array vacío para almacenar los datos del usuario
const datos = []

const almacenarSession = (key, value) => {
    JSON.stringify(sessionStorage.setItem(key, value))
}

// Cuando => click en 'Enviar' imprimir mensaje, almacenar datos en array y sessionStorage
enviar.addEventListener('click', (e) => {
    e.preventDefault()

    let usuario = {
        nombre: nombre.value,
        email: email.value
    }
    // verifica que los campos de nombre e email no estén vacíos y el checkbox esté marcado
    if((nombreIngresado !== '' || email.value !== '') && checkbox.checked) {
        datos.push(usuario)
        for(const dato of datos) {
            almacenarSession(`Nombre: `, (dato.nombre))
            almacenarSession(`Email: `, (dato.email))
        }
        $('#bienvenida').fadeIn(1000)
        bienvenida.innerHTML = `
        <p>Felicidades ${nombreIngresado} ya sos parte de la Quinta Fuerza!</p>
        `
    } else {
        $('#bienvenida').fadeIn(1000)
        bienvenida.innerHTML = `
        <p><b>Por favor complete los campos obligatorios (Nombre- Email - Checkbox).</b></p>
        `
    } 
    console.log(datos)
})

//Evento para limpiar form
$('#reestablecer').click((e) => {
    e.preventDefault()

    $('#bienvenida').fadeOut(1000)
    $('#contact--form').trigger('reset')
    $('#bienvenida').text(' ')
})