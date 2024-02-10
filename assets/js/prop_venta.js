const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4 ,
        baños: 4 ,
        costo: 5000 ,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2 ,
        baños: 2 ,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de ladrillo estilo ingles',
        src: 'https://media.istockphoto.com/id/1314814500/es/foto/casas-en-inglaterra-con-ladrillos-rojos-t%C3%ADpicos-al-atardecer-main-street-en-una-nueva-finca.jpg?s=1024x1024&w=is&k=20&c=CHEXesvkllw6N4XJY68Duy9ghyBvcIsBsthKTz08EPI=',
        descripcion: 'Preciosa casa ubicada en el barrio ingles de la cuidad',
        ubicacion: '353 Av. Costanera, Pichidangui',
        habitaciones: 3,
        baños: 2,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento con vista al mar',
        src: 'https://s7d9.scene7.com/is/image/aimcoprod/Yacht-Club-at-Brickell-St-Tropez-Balcony_01?qlt=100&fmt=jpg',
        descripcion: 'Luminoso apartamento hubicado en las costa de Miami',
        ubicacion: '709. st. Tropez',
        habitaciones: 2,
        baños: 2,
        costo: 3500,
        smoke: true,
        pets: false
    },
{
        nombre: 'Complejo Casa María',
        src: 'https://www.forbesglobalproperties.com/wp-content/uploads/2024/02/1-PRIMARY.jpg',
        descripcion: 'Casa María es perfecta para el comprador exigente que desea un oasis de tranquilidad a solo minutos del corazón de San Miguel de Allende.',
        ubicacion: '3 Membrillo, Jalpa ',
        habitaciones: 3,
        baños:2,
        costo: 1300000,
        smoke: true,
        pets: true
    }

]

const info_ventas = document.querySelector("#prop-ventas")

let template_ventas = ''
let index = 0

let path2 =window.location.pathname
let page2 = path2.split("/").pop()


for (let dato of propiedades_venta) {

    if(page2 === "index.html"){
        if(index==3){
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

   template_ventas += `

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
index++
}

info_ventas.innerHTML= template_ventas


