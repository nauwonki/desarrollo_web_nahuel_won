const validarForm = (event) => {
    event.preventDefault(); 
    let isValid = false;
    let msg = "";
    //validar email
    const validadorMail = (mail) => mail && mail.includes("@");
    let emaiInput = document.getElementById("email");
    if (!validadorMail(emaiInput.value)) {
        msg += "El email es incorrecto.\n";
       emaiInput.style.borderColor = "red";
    } else {
        emaiInput.style.borderColor = "";
    }
    //validar nombre
    let nombreInput = document.getElementById("nombre");
    if (nombreInput.value.length < 3 || nombreInput.value.length > 200) {
        msg += "El nombre debe tener entre 3 y 200 caracteres.\n";
        nombreInput.style.borderColor = "red";
    } else {
        nombreInput.style.borderColor = "";
    }
    //validar celular
    let celularInput = document.getElementById("numcel");
    if (celularInput.value && !/^\+[0-9]{3}\.[0-9]{8}$/.test(celularInput.value)) {
        msg += "El número de celular debe tener el formato +XXX.XXXXXXXX.\n";
        celularInput.style.borderColor = "red";
    } else {
        celularInput.style.borderColor = "";
    }
    //validar tipo mascota
    let mascotaInput = document.getElementById("tipo");
    if (!mascotaInput.value) {
        msg += "Debe seleccionar un tipo de mascota.\n";
        mascotaInput.style.borderColor = "red";
    } else {
        mascotaInput.style.borderColor = "";
    }
    //validar cantidad
    let cantidadInput = document.getElementById("cantidad");
    if (!cantidadInput.value || cantidadInput.value < 1) {
        msg += "Debe ingresar una cantidad válida de mascotas.\n";
        cantidadInput.style.borderColor = "red";
    } else {
        cantidadInput.style.borderColor = "";
    }
    //validar edad
    let edadInput = document.getElementById("edad");
    if (!edadInput.value || edadInput.value < 1) {
        msg += "Debe ingresar una edad válida para la mascota.\n";
        edadInput.style.borderColor = "red";
    } else {
        edadInput.style.borderColor = "";
    }
    //validar unidad de edad
    let unidadEdadInput = document.getElementById("unidad-edad");
    if (!unidadEdadInput.value) {
        msg += "Debe seleccionar una unidad de edad.\n";
        unidadEdadInput.style.borderColor = "red";
    } else {
        unidadEdadInput.style.borderColor = "";
    }
    //validar fecha entrega
    let fechaEntregaInput = document.getElementById("fecha-entrega");
    if (!fechaEntregaInput.value) {
        msg += "Debe ingresar una fecha de entrega válida.\n";
        fechaEntregaInput.style.borderColor = "red";
    } else {
        fechaEntregaInput.style.borderColor = "";
    }
    //validar region
    let regionInput = document.getElementById("region");
    if (!regionInput.value) {
        msg += "Debe seleccionar una región.\n";
        regionInput.style.borderColor = "red";
    } else {
        regionInput.style.borderColor = "";
    }
    //validar comuna
    let comunaInput = document.getElementById("comuna");
    if (!comunaInput.value) {
        msg += "Debe seleccionar una comuna.\n";
        comunaInput.style.borderColor = "red";
    } else {
        comunaInput.style.borderColor = "";
    }
    //validar sector
    let sectorInput = document.getElementById("sector");
    if (sectorInput.value.length > 100) {
        msg += "El sector debe tener menos de 100 caracteres.\n";
        sectorInput.style.borderColor = "red";
    } else {
        sectorInput.style.borderColor = "";
    }
    
    //validar fotos
    let fotosInput = getFotos();
    if (!validarFotos(fotosInput)) {
        msg += "Debe subir entre 1 y 5 archivos de tipo imagen o PDF.\n";
        document.getElementById("fotos").style.borderColor = "red";
    } else {
        document.getElementById("fotos").style.borderColor = "";
    }   

    if (msg === "") {
        isValid = true;
    }
    if (isValid) {
        mostrar();
    } else {
        alert(msg); 
    }
    
};

const validarFotos = (fotosInput) => {
    if (!fotosInput) return false;
    let lengthValid = 1 <= fotosInput.length && fotosInput.length <= 5;
    let typeValid = true;
    for (const file of fotosInput) {
        let fileFamily = file.type.split("/")[0];
        typeValid &&= fileFamily == "image" || file.type == "application/pdf";
    }
    return lengthValid && typeValid;
}

const mostrar = () => {
    document.getElementById("confirmar").style.display = "flex";
};
const close = () => {
    document.getElementById("confirmar").style.display = "none";
};
const confirmEnvio = () => {
    document.getElementById("confirmar").style.display = "none";
    document.querySelector(".agregar-aviso").style.display = "none";
    document.getElementById("confirmado").style.display = "flex";
};
const volverPortada = () => {
    window.location.href = "tarea1html.html";
};

let submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", validarForm);
let confirmarBtn = document.getElementById("btn-confirmar");
confirmarBtn.addEventListener("click", confirmEnvio);
let cancelarBtn = document.getElementById("btn-cancelar");
cancelarBtn.addEventListener("click", close);
let cerrarBtn = document.getElementById("btn-cerrar");
cerrarBtn.addEventListener("click", volverPortada);

document.addEventListener("DOMContentLoaded", function() {
    cargarRegiones();
});

const cargarRegiones = () => {
    const regionSelect = document.getElementById("region");
    region_comuna.regiones.forEach(function(region) {
        const option = document.createElement("option");
        option.value = region.numero;
        option.textContent = region.nombre;
        regionSelect.appendChild(option);
    });
}

document.getElementById("region").addEventListener("change", function() {
    const regionSeleccionada = this.value;
    const comunaSelect = document.getElementById("comuna");
    comunaSelect.innerHTML = '<option value="">Seleccione una comuna</option>'; 
    if (regionSeleccionada) {
        const region = region_comuna.regiones.find(reg => reg.numero == regionSeleccionada);
        if (region){
            region.comunas.forEach(function(comuna) {
                const option = document.createElement("option");
                option.value = comuna.id;
                option.textContent = comuna.nombre;
                comunaSelect.appendChild(option);
            });
        }
    }
});

// Código para agregar contactos dinámicamente
let contactCount = 0;
let maxContacts = 5;

const agregarContacto = () => {
    if (contactCount >= maxContacts) return;
    contactCount++;

    const container = document.getElementById("contacto-container");
    const contactRow = document.createElement("div");
    contactRow.className = "contacto-row";
    contactRow.id = `contacto-row-${contactCount}`;

    contactRow.innerHTML = `
        <div class="contacto-select">
            <select id="contacto-tipo-${contactCount}" onchange="showInput(${contactCount})">
                <option value="">Seleccione tipo de contacto</option>
                <option value="whatsapp">whatsApp</option>
                <option value="telegram">Telegram</option>
                <option value="x">X</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="otro">Otro</option>
            </select>
        </div>
        <div class="contacto-input"></div>
        <input
            type="text"
            id="contacto-info-${contactCount}"
            placeholder="Seleccione un tipo de contacto"
            minlength="4"
            maxlength="50"
            disabled
            style="display:none;"
        >
        </div>
        <button type="button" class="btn-eliminar" onclick="eliminarContacto(${contactCount})">Eliminar</button>
    `;
    container.appendChild(contactRow);
}

const showInput = (id) => {
    const tipoSelect = document.getElementById(`contacto-tipo-${id}`);
    const infoInput = document.getElementById(`contacto-info-${id}`);

    if (tipoSelect.value) {
        infoInput.style.display = "block";
        infoInput.disabled = false;
        
        const placeholderMap = {
            'whatsapp': '+569.12345678',
            'telegram': '@usuario',
            'x': '@usuario',
            'instagram': '@usuario',
            'tiktok': '@usuario',
            'otro': 'Ingrese el contacto'
        };

        infoInput.placeholder = placeholderMap[tipoSelect.value];
        infoInput.focus();
    } else {
        infoInput.style.display = "none";
        infoInput.disabled = true;
        infoInput.value = "";
    }
};

const eliminarContacto = (id) => {
    const row = document.getElementById(`contacto-row-${id}`);
    if (row) {
        row.remove();
        contactCount--;
    }
};

// Código para agregar fotos
let photoCount = 1;
const maxPhotos = 5;

const agregarFoto = () => {
    if (photoCount >= maxPhotos) return;
    photoCount++;
    const container = document.getElementById("foto-container");

    const photoRow = document.createElement("div");
    photoRow.className = "foto-row";
    photoRow.id = `foto-row-${photoCount}`;

    photoRow.innerHTML = `
        <div class="foto-input">
            <input type="file" id="foto-${photoCount}" accept="image/*,application/pdf">
        </div>
        <button type="button" class="btn-eliminar" onclick="eliminarFoto(${photoCount})">Eliminar</button>
    `;
    container.appendChild(photoRow);
};

const eliminarFoto = (id) => {
    if (id === 1) return; 
    const row = document.getElementById(`foto-row-${id}`);
    if (row) {
        row.remove();
        photoCount--;
    }
};

const getFotos = () => {
    const fotos = [];
    for (let i = 1; i <= photoCount; i++) {
        const fotoInput = document.getElementById(`foto-${i}`);
        if (fotoInput && fotoInput.files[0] && fotoInput.files) {
            fotos.push(fotoInput.files[0]);
        }
    }
    return fotos;
};