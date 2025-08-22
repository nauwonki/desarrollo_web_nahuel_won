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
    
    if (msg === "") {
        isValid = true;
    }
    if (isValid) {
        mostrar();
    } else {
        alert(msg); 
    }
    
};

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