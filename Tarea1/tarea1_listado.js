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
            "https://placekitten.com/200/300",
            "https://placekitten.com/200/301",
            "https://placekitten.com/200/302"
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
};

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
