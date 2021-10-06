// Variables Globales

const busqueda = document.querySelector('#buscador')
const searchBtn = document.querySelector('#search--btn')
let listaBusqueda = document.getElementById('lista__busqueda')
const catalogo = document.querySelector('#catalogo')

/* desactivación del autocompletado para el input del buscador */
busqueda.autocomplete = 'off'

/* Consumo de .json local para lograr el filtro de búsqueda en el catálogo */
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
        .catch(err => console.log(err))
    })
