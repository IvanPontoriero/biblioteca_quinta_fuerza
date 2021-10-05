
let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {
// Se añaden las clases darkMode
    $('body').addClass('dark')
    $('#dark__mode').addClass('active')
// Actualzación del localStorage 
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
// Se quitan las clases darkMode
    $('body').removeClass('dark')
    $('#dark__mode').removeClass('active')
// Actualización del localStorage
    localStorage.setItem('darkMode', null)
}

//Verifica que el darkMode esté activado y llama la función
if(darkMode === 'enabled') {
    enableDarkMode()
}

$(() => {
    /* Evento para el dark mode */
    $('#dark__mode').click(() => {
        darkMode = localStorage.getItem('darkMode')

        if(darkMode !== 'enabled') {
            enableDarkMode()
        } else {
            disableDarkMode()
        }
    })

    /*se oculta la card y se la muestra luego de un click*/
    $('.card--mision').hide()
    
    $('#conoce--container').click(() => {
        
        $('#btn--conoce').slideUp(1000)
        $('.card--mision').delay('1005').slideDown(1000)
    })

    /*funcionamiento del popup en todas las páginas*/
    setTimeout(function popUp() {
            $('#popup--wrapper').slideDown(1000)
    }, 40000);

    $('#popup--close').click( () => {

        $('#popup--wrapper').slideUp(1000)
    })

    $('#popup--wrapper').click( (e) => {

        if(e.target.className === 'popup--wrapper') {
            $('#popup--wrapper').slideUp(1000)
        }
    })

    $('#btn--donar').click( () => {

        $('#popup--wrapper').slideUp(1000)
    })
})