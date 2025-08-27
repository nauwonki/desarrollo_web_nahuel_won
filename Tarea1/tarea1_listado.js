const detalle = {
    1: {
        fechaPublicacion: "2025-08-18 12:00",
        fechaEntrega: "2025-08-25",
        region: "Región Metropolitana",
        comuna: "Santiago",
        sector: "Beauchef 850, terraza",
        tipo: "Gato",
        cantidad: "1",
        edad: "2 meses",
        descripcion: "1 gatito",
        nombre: "Juan Pérez",
        email: "juanperez@gmail.com",
        celular: "+569.87654321",
        contactar: "WhatsApp",
        fotos: [
            "https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg",
            "https://www.diamondpet.com/wp-content/uploads/2021/03/kitten-sitting-on-floor-031621.jpg",
            "https://d2zp5xs5cp8zlg.cloudfront.net/image-86754-800.jpg"
        ]
    },
    2: {
        fechaPublicacion: "2025-08-17 19:00",
        fechaEntrega: "2025-08-24",
        region: "Región Metropolitana",
        comuna: "Ñuñoa",
        sector: "Plaza",
        tipo: "Perro",
        cantidad: "3",
        edad: "2 meses",
        descripcion: "3 perritos",
        nombre: "María López",
        email: "marialopez@gmail.com",
        celular: "+569.12345678",
        contactar: "Instagram",
        fotos: [
            "https://placekitten.com/200/303",
            "https://placekitten.com/200/304",
        ]
    },
    3: {
        fechaPublicacion: "2025-08-17 18:00",
        fechaEntrega: "2025-08-24",
        region: "Región Metropolitana",
        comuna: "Santiago",
        sector: "Parque O'Higgins",
        tipo: "Gato",
        cantidad: "2",
        edad: "1 mes",
        descripcion: "2 gatitos",
        nombre: "Carlos Fernández",
        email: "carlosfernandez@gmail.com",
        celular: "+569.13245678",
        contactar: "Telegram",
        fotos: [
            "https://placekitten.com/200/305",
        ]
    },
    4: {
        fechaPublicacion: "2025-08-16 15:00",
        fechaEntrega: "2025-08-23",
        region: "Región Metropolitana",
        comuna: "Providencia",
        sector: "Metro Los Leones",
        tipo: "Perro",
        cantidad: "1",
        edad: "3 meses",
        descripcion: "1 perrito",
        nombre: "Ana Torres",
        email: "anatorres@gmail.com",
        celular: "+569.65432123",
        contactar: "WhatsApp",
        fotos: [
            "https://placekitten.com/200/306",
            "https://placekitten.com/200/307",
            "https://placekitten.com/200/308",
            "https://placekitten.com/200/309"
        ]
    },
    5: {
        fechaPublicacion: "2025-08-15 10:00",
        fechaEntrega: "2025-08-22",
        region: "Región Metropolitana",
        comuna: "Recoleta",
        sector: "Patronato",
        tipo: "Gato",
        cantidad: "1",
        edad: "4 meses",
        descripcion: "1 gatito",
        nombre: "Pedro González",
        email: "pedrogonzalez@gmail.com",
        celular: "+569.98765432",
        contactar: "Instagram",
        fotos: [
            "https://placekitten.com/200/310",
            "https://placekitten.com/200/311"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const fotoGrande = document.getElementById('foto-grande');
    if (fotoGrande) {
        fotoGrande.style.display = 'none';
    }
});

const clickFilas = document.querySelectorAll('.click-fila');
clickFilas.forEach(fila => {
    fila.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        mostrarDetalle(id);
    });
});


const mostrarDetalle = (id) => {
    const datos = detalle[id];
    if (!datos) {
        alert("No se encontraron detalles para este ID.");
        return;
    }
    document.getElementById('foto-grande').style.display = 'none';
    document.getElementById('listados').style.display = 'none';
    document.getElementById('detalle').style.display = 'block';
    document.getElementById('detalle-value-publ').textContent = datos.fechaPublicacion;
    document.getElementById('detalle-value-deliv').textContent = datos.fechaEntrega;
    document.getElementById('detalle-value-region').textContent = datos.region;
    document.getElementById('detalle-value-comuna').textContent = datos.comuna;
    document.getElementById('detalle-value-sector').textContent = datos.sector;
    document.getElementById('detalle-value-tipo').textContent = datos.tipo;
    document.getElementById('detalle-value-cantidad').textContent = datos.cantidad;
    document.getElementById('detalle-value-edad').textContent = datos.edad;
    document.getElementById('detalle-value-desc').textContent = datos.descripcion;
    document.getElementById('detalle-value-nombre').textContent = datos.nombre;
    document.getElementById('detalle-value-email').textContent = datos.email;
    document.getElementById('detalle-value-celular').textContent = datos.celular;
    document.getElementById('detalle-value-contactar').textContent = datos.contactar;

    cargarFotos(datos.fotos);
};

let fotoActual = 0;
let fotosActual = [];

const cargarFotos = (fotos) => {
    fotosActual = fotos;
    const fotoTable = document.getElementById('foto-table');
    fotoTable.innerHTML = '';

    fotos.forEach((foto, index) => {
        const item = document.createElement('div');
        item.className = 'foto-thumb';
        item.style.display = 'inline-block';
        item.style.margin = '5px';

        const img = document.createElement('img');
        img.src = foto;
        img.alt = `Foto ${index + 1}`;
        img.style.cursor = 'pointer';
        img.style.width = '320px';
        img.style.height = '240px';
        img.style.objectFit = 'cover';
        img.style.margin = '5px';

        img.addEventListener('click', () => {
            fotoActual = index;
            mostarFoto(foto);
        });
        item.appendChild(img);
        fotoTable.appendChild(item);
    });
    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '10px';
    btnContainer.style.textAlign = 'center';
    btnContainer.style.width = '100%';

    const btnVerFoto = document.createElement('button');
    btnVerFoto.textContent = 'Ver Foto';
    btnVerFoto.className = 'btn-ver-foto';
    btnVerFoto.style.marginTop = '10px';
    btnVerFoto.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (fotosActual && fotosActual.length > 0) {
            fotoActual = 0;
            mostarFoto(fotosActual[0]);
        }
    });
    btnContainer.appendChild(btnVerFoto);
    fotoTable.appendChild(btnContainer);
};

const mostarFoto = (src) => {
    let srcGrande = src;
    srcGrande = src.replace('320/240', '800/600')
                    .replace('320/241', '800/601')
                    .replace('320/242', '800/602')
                    .replace('320/243', '800/603')
                    .replace('320/244', '800/604')
                    .replace('320/245', '800/605')
                    .replace('320/246', '800/606')
                    .replace('320/247', '800/607')
                    .replace('320/248', '800/608');

    const fotoGrandeImg = document.getElementById('foto-grande-img');
    const fotoGrandeModal = document.getElementById('foto-grande');

    if (fotoGrandeImg && fotoGrandeModal) {
        fotoGrandeImg.src = srcGrande;
        fotoGrandeModal.style.display = 'flex';
        fotoGrandeModal.style.justifyContent = 'center';
        fotoGrandeModal.style.alignItems = 'center';
        fotoGrandeModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        fotoGrandeModal.style.width = '100%';
        fotoGrandeModal.style.height = '100%';
        fotoGrandeModal.style.position = 'fixed';
        fotoGrandeModal.style.top = '0';
        fotoGrandeModal.style.left = '0';
    }
};

const cerrarFoto= () => {
    document.getElementById('foto-grande').style.display = 'none';
};

document.getElementById('foto-grande').addEventListener('click', function(event) {
    if (event.target === this) {    
        cerrarFoto();
    }
});

const volverPortada = () => {
    window.location.href = 'tarea1html.html';
};
let volverPortadaBtn = document.getElementById('volver-portada-btn');
volverPortadaBtn.addEventListener("click", volverPortada);

const volverAviso = () => {
    window.location.href = 'tarea1_agregar_html.html';
};
let agregarAvisoBtn = document.getElementById('agregar-aviso-btn');
agregarAvisoBtn.addEventListener("click", volverAviso);

const volverListado = () => {
    window.location.href = 'tarea1_listado.html';
};
let volverListadoBtn = document.getElementById('volver-listado-btn');
volverListadoBtn.addEventListener("click", volverListado);

let volverPortadaDetalleBtn = document.getElementById('volver-portada-detallebtn');
volverPortadaDetalleBtn.addEventListener("click", volverPortada);



