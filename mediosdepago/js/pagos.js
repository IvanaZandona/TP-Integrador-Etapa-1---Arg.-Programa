addEventListener("DOMContentLoaded", () =>{
    const btn_menu = document.querySelector(".btn_menu");
    if (btn_menu){
        btn_menu.addEventListener("click", () =>{
            const navItems = document.querySelector(".nav-items");
            navItems.classList.toggle("show");
        })
    }
})


var ingreso2 = document.getElementById("2cuotas");
var ingreso3 = document.getElementById("3cuotas");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var total2 = document.getElementById("2cuotasFinal");
var total3 = document.getElementById("3cuotasFinal");
var entrega2 = document.getElementById("2cuotasEntrega");
var entrega3 = document.getElementById("3cuotasEntrega");
var cuotas2 = document.getElementById("2cuotasFinalFinal");
var cuotas3 = document.getElementById("3cuotasFinalFinal");
var botonBorrar = document.getElementById("botonBorrar1");
var botonBorrar = document.getElementById("botonBorrar2");

boton2.addEventListener("click", function(e){
    e.preventDefault();
    var ingreso2 = document.getElementById("2cuotas").value;
    if (ingreso2>0) {
        var ingreso2 = (ingreso2 * 1.16);
        var ingreso2 = parseFloat(ingreso2).toFixed(2);
        document.getElementById("2cuotasFinal").value= ingreso2;
        var ingreso2 = (ingreso2 / 2);
        var ingreso2 = parseFloat(ingreso2).toFixed(2);
        document.getElementById("2cuotasEntrega").value= ingreso2;
        var ingreso2 = (ingreso2 / 2);
        var ingreso2 = parseFloat(ingreso2).toFixed(2);
        document.getElementById("2cuotasFinalFinal").value= ingreso2;
    }
    else{
        document.getElementById("2cuotas").value="";
    }
})

boton3.addEventListener("click", function(e){
    e.preventDefault();
    var ingreso3 = document.getElementById("3cuotas").value;
    var ingreso3 = parseFloat(ingreso3).toFixed(2);
    if (ingreso3>0) {
        var ingreso3 = (ingreso3 * 1.24);
        var ingreso3 = parseFloat(ingreso3).toFixed(2);
        document.getElementById("3cuotasFinal").value= ingreso3;
        var ingreso3 = (ingreso3 / 2);
        var ingreso3 = parseFloat(ingreso3).toFixed(2);
        document.getElementById("3cuotasEntrega").value= ingreso3;
        var ingreso3 = (ingreso3 / 3);
        var ingreso3 = parseFloat(ingreso3).toFixed(2);
        document.getElementById("3cuotasFinalFinal").value= ingreso3;
    }
    else{
        document.getElementById("3cuotas").value="";
    }
})

botonBorrar1.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("2cuotas").value="";
    document.getElementById("2cuotasFinal").value="";
    document.getElementById("2cuotasEntrega").value="";
    document.getElementById("2cuotasFinalFinal").value="";
})
botonBorrar2.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("3cuotas").value="";
    document.getElementById("3cuotasFinal").value="";
    document.getElementById("3cuotasEntrega").value="";
    document.getElementById("3cuotasFinalFinal").value="";
})
