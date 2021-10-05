// Variables Globales

const busqueda = document.querySelector('#buscador')
const searchBtn = document.querySelector('#search--btn')
let listaBusqueda = document.getElementById('lista__busqueda')
const catalogo = document.querySelector('#catalogo')
//let contenedor = document.querySelectorAll('.card--container')

// Array de objetos del catálogo -- libros por títutlo y autor
/*
const listaCatalogo = [
    {titulo: 'fisica_universitaria_vol_i', autor: 'francis_sears'},
    {titulo: 'ecuaciones_diferenciales_con_aplicaciones_y_notas_historicas', autor: 'george_f_simmons'},
    {titulo: 'manual_de_normas_de_aplicación_para_dibujo_tecnico', autor: 'iram'},
    {titulo: 'learning_javascript_data_structures_and_algorithms', autor: 'loiane_groner'},
    {titulo: 'calculo_diferencial_e_integral', autor: 'nikolai_piskunov'},
    {titulo: 'algebra_lineal', autor: 'stanley_i_grossman'},
    {titulo: 'quimica_general', autor: 'ralph_h_petrucci'},
    {titulo: 'quimica', autor: 'raymond_chang'},
]

const filtrar = () => {
    const entrada = busqueda.value.toLowerCase()
    catalogo.innerHTML = ''

    for(let libro of listaCatalogo) {
        let titulo = libro.titulo.toLowerCase()
        let autor = libro.autor.toLowerCase()
        if(titulo.indexOf(entrada) !== -1 || autor.indexOf(entrada) !== -1){
            catalogo.innerHTML += `<div class="card mb-3 col-sm-10 col-md-5 col-xl-6 card--container" id='${libro.titulo} ${libro.autor}' style="max-width: 540px;">
            <div class="row g-0">
            </div>
            </div>`
            console.log(contenedor)
        }
    }

    if(catalogo.innerHTML === '') {
        catalogo.innerHTML += '<h3> Aún no cargamos ese libro en la Biblioteca, proba con los que se encuentran en nuestro catálogo o ponete en contacto con nosotros y hacemos saber que libro necesitas!</h3>'
    }
}

//Eventos para el buscador

searchBtn.addEventListener('click', filtrar)
busqueda.addEventListener('keyup', filtrar)

// Evento para el buscador -- por ahora simula una búsqueda
busqueda.addEventListener('input', (e) => {
    let resultados = e.target.value
    console.log(resultados)
    listaBusqueda.innerHTML = `<li>${resultados}</li>`
})*/

fetch('../catalogo.json') 
    .then(response => response.json())
    .then(data => {
        const filtrar = () => {
            const entrada = busqueda.value.toLowerCase()
            catalogo.innerHTML = ''

            for(let libro of data) {
                let titulo = libro.titulo.toLowerCase()
                let autor = libro.autor.toLowerCase()
                if(titulo.indexOf(entrada) !== -1 || autor.indexOf(entrada) !== -1){
                    catalogo.innerHTML += 
                    `<div class="card mb-3 col-sm-10 col-md-5 col-xl-6 card--container" id='${libro.id}' style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${libro.imgSrc}" class="img-fluid rounded-start" alt="${libro.alt}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title h5">${libro.titulo}</h5>
                                    <p class="card-text card-content">${libro.content}</p>
                                    <p class="card-text card-small"><small class="text-muted">${libro.autor}</small></p>
                                    <p class="card-text card-small"><small class="text-muted">${libro.edicion}</small></p>
                                    <button type="button" class="btn btn-outline-primary btn-md descargar"><a href='${libro.link}' target='_blank'>Visualizar</a></button>
                            </div>
                        </div>
                    </div>`
                }
            }
        
            if(catalogo.innerHTML === '') {
                catalogo.innerHTML += '<h3> Aún no cargamos ese libro en la Biblioteca, proba con los que se encuentran en nuestro catálogo o ponete en contacto con nosotros y hacemos saber que libro necesitas!</h3>'
            }
        }
        searchBtn.addEventListener('click', filtrar)
        busqueda.addEventListener('keyup', filtrar)

        busqueda.addEventListener('input', (e) => {
            let resultados = e.target.value
            console.log(resultados)
            listaBusqueda.innerHTML = `<li>${resultados}</li>`
        })
    })
