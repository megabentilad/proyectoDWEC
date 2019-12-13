function empezarFuncion(){
        //DECLARAR
    origen = document.getElementById("origen");
    destino = document.getElementById("destino");
    fecha = document.getElementById("fecha");
    pasajeros = document.getElementById("pasajeros");
    lpdA = document.getElementById("lpdA");
    formularioInicial = document.getElementById("formularioInicial");
    formulariosPasajeros = document.getElementById("formulariosPasajeros");
    
        //APLICAR EVENTOS
    origen.addEventListener('blur', eValidarAlfabetico, false);
    destino.addEventListener('blur', eValidarAlfabetico, false);
    fecha.addEventListener('change', activarEnviar, false);
    lpdA.addEventListener('click', activarEnviar, false);
    
        //APLICAR ATRIBUTO DE FECHA
    var fechaEntera = new Date();
    var fechaFormateada = "";
    fechaFormateada = fechaEntera.getFullYear() + "-" + (fechaEntera.getMonth()+1) + "-" + fechaEntera.getDate();
    fecha.min = fechaFormateada;
}

function eValidarAlfabetico(){
    if(!validarAlfabetico(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
}

function eValidarNumero(){
    if(!validarEntero(this.value, 1)) {
        this.focus();
    }else{
        activarEnviar();
    }
}
function activarEnviar(){
    if(origen.value !== "" && destino.value !=="" && fecha.value !=="" && lpdA.checked === true){
        document.getElementById("enviarA").disabled = false;
    }else{
        document.getElementById("enviarA").disabled = true;
    }
}

function borrarFormulario(){
    var numPasajeros = pasajeros.value;
    formularioInicial.removeChild(formularioInicial.firstChild)
    return false;
}
window.addEventListener('load',empezarFuncion, false);
