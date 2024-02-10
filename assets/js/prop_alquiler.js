const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Lujo y armonía: vivienda de obra nueva con piscina',
        src: 'https://www.forbesglobalproperties.com/wp-content/uploads/2024/02/84102579-20240209000000-1-69677509465bd7425b40d89.74549305_3840.webp-original-579011-1707535002.jpg',
        descripcion: 'El refugio perfecto para escapar del ajetreo y el bullicio de la vida cotidiana y disfrutar de la paz y el idilio.',
        ubicacion: 'Hermatswil, Zürich, 8330, Suiza',
        habitaciones: 4,
        baños: 3,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: '19 Rockstream Drive',
        src: 'https://www.forbesglobalproperties.com/wp-content/uploads/2024/02/19rockstreamdrive-100-768x512.jpg',
        descripcion: 'Una obra maestra del lujo moderno y una casa escaparate recién terminada que revela majestuosas vistas del Strip de Las Vegas y más allá desde cada rincón.',
        ubicacion: 'Henderson, Nevada, 89012, Estados Unidos',
        habitaciones: 5,
        baños: 3,
        costo: 4000,
        smoke: true,
        pets: false
    }
]

const info_alquiler = document.querySelector("#prop-alquiler")

let html_alquiler = ''
let index2 = 0

let path = window.location.pathname
let page = path.split("/").pop()

for (let dato of propiedades_alquiler) {
    if(page === "desafio4Arreglos/"){
        if(index2==3){
            break
        }
    }

    let fumar = ''

    if (dato.smoke== true){
    fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    }else{
    fumar ='<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }

    let mascotas =''

    if (dato.pets === true){
    mascotas ='<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    }else{
    mascotas ='<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
    }

   html_alquiler += `

    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${dato.src}" class="card-img-top" alt="Imagen del departamento"/>

            <div class="card-body">
                <h5 class="card-title">
                    ${dato.nombre}
                </h5>
                <p class="card-text">
                    ${dato.descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${dato.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i>
                    ${dato.habitaciones} |
                    <i class="fas fa-bath"></i>
                    ${dato.baños}
                </p>
                <p>
                    <i class="fas fa-dollar-sign"></i>
                    ${dato.costo}
                </p>

                ${fumar}

                ${mascotas}

            </div>
        </div>
    </div>

`
index2++
}

info_alquiler.innerHTML = html_alquiler
