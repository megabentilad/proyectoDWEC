function empezarFuncion(){
        //DECLARAR
    origen = document.getElementById("origen");
    destino = document.getElementById("destino");
    fecha = document.getElementById("fecha");
    pasajeros = document.getElementById("pasajeros");
    lpdA = document.getElementById("lpdA");
    formularioInicial = document.getElementById("formularioInicial");
    formulariosPasajeros = document.getElementById("formulariosPasajeros");
    bAceptar = document.getElementById("enviarA");
        //APLICAR EVENTOS
    origen.addEventListener('blur', eValidarAlfabetico, false);
    destino.addEventListener('blur', eValidarAlfabetico, false);
    fecha.addEventListener('change', activarEnviar, false);
    lpdA.addEventListener('click', activarEnviar, false);
    bAceptar.addEventListener('click', cambioFormulario, false);
    
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
    formularioInicial.removeChild(formularioInicial.firstChild);
}
function crearFormularios(){
    //Guardar los datos
    var Torigen = document.createTextNode("Origen: " + origen.value);
    var Porigen = document.createElement("p");
    Porigen.appendChild(Torigen);
    document.getElementById("datos").appendChild(Porigen);
    
    var Tdestino = document.createTextNode("Destino: " + destino.value);
    var Pdestino = document.createElement("p");
    Pdestino.appendChild(Tdestino);
    document.getElementById("datos").appendChild(Pdestino);
    
    var Tfecha = document.createTextNode("Fecha: " + fecha.value);
    var Pfecha = document.createElement("p");
    Pfecha.appendChild(Tfecha);
    document.getElementById("datos").appendChild(Pfecha);
    
    var Tpasajeros = document.createTextNode("Pasajeros: " + pasajeros.value);
    var Ppasajeros = document.createElement("p");
    Ppasajeros.appendChild(Tpasajeros);
    document.getElementById("datos").appendChild(Ppasajeros);
    //document.getElementById("datos").appendChild(document.createElement("p").appendChild(document.createTextNode("Destino: " + destino.value)));                NO FUNCIONA
    
    //crear los formularios
    var Fpasajero = document.createElement("form");
    for(var i = 1; i<=pasajeros.value;i++){
        var fieldPasajero = document.createElement("fieldset");
        fieldPasajero.setAttribute("id","pasajero" + i);
        
        //Dar nombre al fieldset
        var fieldNombre = document.createElement("legend");
        var legendNombre = document.createTextNode("Pasajero " + i);
        fieldNombre.appendChild(legendNombre);
        fieldPasajero.appendChild(fieldNombre);
        
        //crear campos 
        var Cnombre = document.createElement("input");
        Cnombre.setAttribute("type","text");
        Cnombre.setAttribute("id", "nombre" + i);
        Cnombre.setAttribute("placeholder","Nombre");
        
        var Capellidos = document.createElement("input");
        Capellidos.setAttribute("type","text");
        Capellidos.setAttribute("id", "apellidos" + i);
        Capellidos.setAttribute("placeholder","Apellidos");
        
        var Cemail = document.createElement("input");
        Cemail.setAttribute("type","email");
        Cemail.setAttribute("id", "email" + i);
        Cemail.setAttribute("placeholder","Email");
        
        var Cfecha = document.createElement("input");
        Cfecha.setAttribute("type","date");
        Cfecha.setAttribute("id", "fecha" + i);
        
        var Cdni = document.createElement("input");
        Cdni.setAttribute("type","text");
        Cdni.setAttribute("id", "nombre" + i);
        Cdni.setAttribute("placeholder","DNI");
        
        //crear etiquetas
        var Lnombre = document.createElement("label");
        Lnombre.setAttribute("for","nombre" + i);
        var TLnombre = document.createTextNode("Nombre: ");
        Lnombre.appendChild(TLnombre);
        
        var Lapellidos = document.createElement("label");
        Lapellidos.setAttribute("for","apellidos" + i);
        var TLapellidos = document.createTextNode("Apellidos: ");
        Lapellidos.appendChild(TLapellidos);
        
        var Lemail = document.createElement("label");
        Lemail.setAttribute("for","email" + i);
        var TLemail = document.createTextNode("Email: ");
        Lemail.appendChild(TLemail);
        
        var Lfecha = document.createElement("label");
        Lfecha.setAttribute("for","fecha" + i);
        var TLfecha = document.createTextNode("Fecha: ");
        Lfecha.appendChild(TLfecha);
        
        var Ldni = document.createElement("label");
        Ldni.setAttribute("for","dni" + i);
        var TLdni = document.createTextNode("Dni: ");
        Ldni.appendChild(TLdni);
        
        //asignar campos y etiquetas al fieldset
    }

    
}
function cambioFormulario(){
    crearFormularios();
    borrarFormulario();
    return false;
}
window.addEventListener('load',empezarFuncion, false);
