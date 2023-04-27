addEventListener("DOMContentLoaded", () =>{
    const btn_menu = document.querySelector(".btn_menu");
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const navItems = document.querySelector(".nav-items");
            navItems.classList.toggle("show")
        })
    }
});

const botonEnviar = document.getElementById("botonEnviar");
const form = document.getElementById("form");
var parrafo = document.getElementById("warnings");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let enviar = false;
    
    var nombre = document.getElementById("nombreCompleto").value;
    if (nombre == "") {
        parrafo.innerHTML=+"! Debe completar su nombre"
        enviar=true;
    }

    var email = document.getElementById("email").value;
    let valEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let emailValido = valEmail.test(email);
    if (!emailValido) {
        parrafo.innerHTML=+"! El Email NO es válido"
        enviar=true;
    }

    var telefono = document.getElementById("telefono").value;
    let valTel = /^([0-9])*$/;
    let telValido = valTel.test(telefono);
    if (!telValido) {
        parrafo.innerHTML=+"! El Teléfono NO es válido. Debe ingresar solo números";
        enviar=true;
    }

    var asunto = document.getElementById("asunto").value;
    if (nombre == "") {
        parrafo.innerHTML=+"! Debe completar el asunto"
        enviar=true;
    }

    var mensaje = document.getElementById("mensaje").value;
    if (nombre == "") {
        parrafo.innerHTML=+"! Debe completar el mensaje"
        enviar=true;
    }

    if (enviar) {
        parrafo.innerHTML="! Complete correctamente todos los campos";
    }else{
        parrafo.innerHTML="Enviado";
    }

    const arrayDatos= [("Nombre completo: " + nombre), ("Email: " + email), ("Teléfono: " + telefono), ("Asunto: " + asunto), ("Mensaje: " + mensaje)];
    console.log(arrayDatos);
})