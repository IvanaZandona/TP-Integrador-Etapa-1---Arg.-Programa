addEventListener("DOMContentLoaded", () =>{
    const btn_menu = document.querySelector(".btn_menu");
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const navItems = document.querySelector(".nav-items");
            navItems.classList.toggle("show")
        })
    }
});







async function obtenerDatos() {
    //Consultamos la API
    const response = await fetch('https://ws.smn.gob.ar/map_items/weather');
    //Detectams el tipo de dato y lo guardamos en datosApi
    const datosApi = await response.json();
    //Aqui dentro utilizamos la información de la API   
    const ciudadCorrientes = datosApi.find(ciudad => ciudad.name == "Corrientes");
    console.log(ciudadCorrientes);
    
}

obtenerDatos();
